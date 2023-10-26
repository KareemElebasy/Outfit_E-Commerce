import axios from "axios";
import { createContext, useContext, useState } from "react";
const BASE_URL = "https://ecommerce.phpv8.aait-d.com/website/";
// Create Context
const AuthContext = createContext(null);
// Define Auth Providers
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [token, setToken] = useState("null");
  // Sign Up
  const signUp = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(
        `${BASE_URL}register`,
        {
          fullname: userData.fullName,
          password: userData.password,
          email: userData.email,
          phone: userData.phoneNumber,
          country_id: 2,
        },
        {
          headers: {
            "Content-type": "application/json",
            "Accept-language": "en",
          },
        }
      );
      localStorage.setItem("phone", userData.phoneNumber);
      // setCookie("phone", userData.phoneNumber);
      console.log("AuthUserData");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Verify
  const verifyCode = async (userData) => {
    try {
      const { res } = await axios.post(
        `${BASE_URL}verify`,
        {
          phone: localStorage.getItem("phone"),
          code: "1111",
          country_id: "2",
        },
        {
          headers: {
            "Content-type": "application/json",
            "Accept-language": "en",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  // login
  const login = async (user) => {
    try {
      const req = await axios.post(
        `${BASE_URL}login`,
        {
          country_id: 2,
          phone: user.phonenumber,
          password: user.password,
          type: "ios",
          device_token: "desktop",
        },
        {
          headers: {
            "Accept-language": "en",
          },
        }
      );
      setUser(req.data.data);
      localStorage.setItem("token",req.data.data.token)
      setToken(req.data.data.token);
      console.log("LoginUSer");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  console.log(token);
  // Get Profile Data
  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}profile`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "en",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // Authorization: `Bearer ${deviceToken}}`,
        },
      });
      console.log(res);
      setUserProfile(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(userProfile);
  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, logOut, signUp, verifyCode, login, fetchUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
