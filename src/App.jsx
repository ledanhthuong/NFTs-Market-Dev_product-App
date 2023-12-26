import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainLayout } from './layout/MainLayout';

import { PATHS } from './constant/pathnames';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './Pages/HomePage';
import { ProductPage } from './Pages/ProductPage';
import { LanguagePage } from './Pages/LanguagePage';


// import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="" element={<ProductPage />}>
            <Route path={PATHS.HOME.PRODUCT} component={<ProductPage />} />
          </Route>
          <Route path="" element={<LanguagePage />}>
            <Route path={PATHS.HOME.LANGUAGE} component={<LanguagePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
 
}
export default App
