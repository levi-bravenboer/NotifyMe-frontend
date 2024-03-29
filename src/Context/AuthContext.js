import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PREFIX, AXIOS_CONFIG } from "../Utils/Api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens") &&
      JSON.parse(localStorage.getItem("authTokens"))
  );

  const [user, setUser] = useState(
    localStorage.getItem("authTokens") &&
      jwt_decode(localStorage.getItem("authTokens"))
  );
  // eslint-disable-next-line
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * User login
   * @param {*} e
   */
  const loginUser = async (body) => {
    try {
      const response = await axios.post(
        `${API_PREFIX}auth/jwt/create/`,
        body,
        AXIOS_CONFIG
      );

      if (response.status === 200) {
        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/app");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**
   * Lets user logout
   */
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  /**
   * Get User data
   */
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${API_PREFIX}auth/users/${user.user_id}/`,
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      if (response.status === 200) {
        setLoading(false);
        setUserData(response.data);
      } else {
        logoutUser();
      }
    } catch (error) {
      console.error(error.response, "err");
      logoutUser();
      if (loading) {
        setLoading(false);
      }
    }
  };
  /**
   * Update token
   */
  const updateToken = async () => {
    const body = {
      refresh: authTokens ? authTokens.refresh : "",
    };

    try {
      const response = await axios.post(
        `${API_PREFIX}auth/jwt/refresh/`,
        body,
        AXIOS_CONFIG
      );

      if (response.status === 200) {
        setLoading(false);
        setAuthTokens(response.data);
        setUser(jwt_decode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
      } else {
        logoutUser();
      }
    } catch (error) {
      logoutUser();
      if (loading) {
        setLoading(false);
      }
      console.error(error);
    }
  };

  useEffect(() => {
    if (loading) updateToken();

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  //Exported and accessible functions/variable when using useContext on AuthContext
  const contextData = {
    user: user,
    setUser: setUser,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    getUserData: getUserData,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

/**
 * Register a user
 * @param {*} userData
 * @returns
 */
export const registerUser = async (userData) => {
  const body = {
    email: userData.email,
    firstname: userData.firstname,
    lastname: userData.lastname,
    phone: userData.phone,
    password: userData.password,
    re_password: userData.repassword,
  };

  try {
    const response = await axios.post(
      `${API_PREFIX}auth/users/`,
      body,
      AXIOS_CONFIG
    );

    return { code: response.status, data: response.data };
  } catch (error) {
    return { code: error.response.status, data: error.response.data };
  }
};

export const confirmRegistration = async (body) => {
  try {
    const response = await axios.post(
      `${API_PREFIX}auth/users/activation/`,
      body,
      AXIOS_CONFIG
    );

    return { code: response.status, data: response.data };
  } catch (error) {
    return { code: error.response.status, data: error.response.data };
  }
};
