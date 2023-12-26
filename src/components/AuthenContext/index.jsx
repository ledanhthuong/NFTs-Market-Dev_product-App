import React, { createContext, useContext, useState } from "react";
import { message } from "antd";
import { authService } from "../../services/authService";
import { LOCAL_STORAGE } from "../../constant/localStorage";

const AuthContext = createContext({});

export const AuthenProvider = ({ children }) => {
  const [isAuthenModalOpen, setIsAuthenModalOpen] = useState(false);
  const onLogin = async (loginData) => {
    console.log("LoginData", loginData);
    try {
      // Call login API or handle login logic
      const res = await authService.login(loginData);
      console.log("res", res);
      const { token, refreshToken } = res?.data?.data || {};
      localStorage.setItem(LOCAL_STORAGE.token, token);
      localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken);
      message.success("Đăng Nhập Thành Công");
    } catch (error) {
      console.log("error", error);
      message.error("Đăng nhập thất bại");
    }
  };

  const onRegister = (registerData) => {
    // Call register API or handle registration logic
    console.log("RegisterData", registerData);
  };

  const openAuthenModal = () => setIsAuthenModalOpen(true);
  const closeAuthenModal = () => setIsAuthenModalOpen(false);

  console.log("loi", isAuthenModalOpen);

  return (
    <AuthContext.Provider
      value={{
        isAuthenModalOpen,
        openAuthenModal,
        closeAuthenModal,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthen = () => useContext(AuthContext);
