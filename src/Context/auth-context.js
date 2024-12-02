import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { apiInstance } from '../Utils/api';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem('authTokens') &&
      JSON.parse(localStorage.getItem('authTokens'))
  );

  const [user, setUser] = useState(
    localStorage.getItem('authTokens') &&
      jwtDecode(localStorage.getItem('authTokens'))
  );
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * User login
   * @param {*} e
   */
  const loginUser = async (body) => {
    try {
      const response = await apiInstance.post('/auth/jwt/create', body);

      if (response.status === 200) {
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        navigate('/app');
      } else {
        alert('Something went wrong!');
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
    localStorage.removeItem('authTokens');
  };

  /**
   * Get User data
   */
  const getUserData = async () => {
    try {
      const response = await apiInstance.get(`/auth/users/${user.user_id}/`, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      });

      if (response.status === 200) {
        setLoading(false);
        setUserData(response.data);
      } else {
        logoutUser();
      }
    } catch (error) {
      console.error(error.response, 'err');
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
      refresh: authTokens ? authTokens.refresh : '',
    };

    try {
      const response = await apiInstance.post('/auth/jwt/refresh', body);

      if (response.status === 200) {
        setLoading(false);
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem('authTokens', JSON.stringify(response.data));
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
    // eslint-disable-next-line camelcase
    re_password: userData.repassword,
  };

  try {
    const response = await apiInstance.post('/auth/users', body);

    return { code: response.status, data: response.data };
  } catch (error) {
    return { code: error.response.status, data: error.response.data };
  }
};

export const confirmRegistration = async (body) => {
  try {
    const response = await apiInstance.post('/auth/users/activation', body);

    return { code: response.status, data: response.data };
  } catch (error) {
    return { code: error.response.status, data: error.response.data };
  }
};
