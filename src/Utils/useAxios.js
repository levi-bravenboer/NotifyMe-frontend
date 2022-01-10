import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { API_PREFIX } from "./Api";
import { useContext } from "react";
import axiosInstanceLoggedIn from "./AxiosInstance";
import AuthContext from "../Context/AuthContext";

const useAxiosLoggedIn = () => {
  const { authTokens, setUser, setAuthtokens } = useContext(AuthContext);
  const axiosInstanceLoggedIn = axios.create({
    API_PREFIX,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstanceLoggedIn.interceptors.request.use(async (req) => {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs() > 1);
    console.log("Is expired: ", isExpired);
    if (!isExpired) {
      return req;
    }
    const response = await axios.post(
      `${API_PREFIX}auth/jwt/refresh/`,
      { refresh: authTokens.refresh },
      AXIOS_CONFIG
    );
    localStorage.setItem("authTokes", JSON.stringify(response.data));

    setAuthtokens(response.data);
    setUser(jwtDecode(response.data.access));

    req.headers.Authorization = `Bearer ${authTokens?.access}`;
  });

  return axiosInstanceLoggedIn;
};


export default useAxiosLoggedIn;
