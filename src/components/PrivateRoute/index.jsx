import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"))
    console.log("isLogin", isLogin);
    if(!isLogin || isLogin === 'false'){
        return <Navigate to={redirectPath}/>;
    }
  return (
    <>
    <Outlet/>
    </>
  )
}
