import React from 'react'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { AuthenProvider } from '../components/AuthenContext';
import { LoginForm } from '../components/AuthenModal/LoginForm';

export const MainLayout = () => {
  return (
    <AuthenProvider>
      <Header />
      {/* <LoginForm/> */}
    {/* Main  */}
      <Outlet />

      <Footer />

    </AuthenProvider>
  );
}
