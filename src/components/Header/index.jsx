import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { PATHS } from '../../constant/pathnames';
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";


 const handleLogoClick = () => {
   history.push("/");
   window.location.reload();
 };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__left">
            <div className="logo">
              <Link to="/" onClick={handleLogoClick}>
                <img srcSet="./img/logo.png 2x" alt="Wooder" />
              </Link>
            </div>
            <div className="search">
              <form action="">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for collections,NFTs of users"
                />
                <div className="search-icon">
                  <img srcSet="./img/search.png 2x" alt="Search Icon" />
                </div>
              </form>
              <div className="desktop__search-modal">
                <div className="desktop_wrapper">
                  <div className="search__item">
                    <h4 className="heading4">Popular</h4>
                    <div className="item__tag">
                      <a href="./languages.html">
                        <span>DevPorduct</span>
                      </a>
                      <a href="">
                        <span>C++</span>
                      </a>
                      <a href="">
                        <span>C-Sharp</span>
                      </a>
                      <a href="">
                        <span>Javascript</span>
                      </a>
                      <a href="">
                        <span>Python</span>
                      </a>
                      <a href="">
                        <span>Java</span>
                      </a>
                      <a href="">
                        <span>Php</span>
                      </a>
                      <a href="">
                        <span>Contact</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="menu">
              <li>
                <Link to="/" onClick={handleLogoClick}>
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="./product_detail.html">Drops</a>
                <span>NEW</span>
              </li>
            </ul>
          </div>
          <div className="header__right">
            {/* <div className="btn__header" id="connectBtn">
        
            </div> */}
            <ThirdwebProvider>
              <ConnectWallet />
            </ThirdwebProvider>
  
            <div className="btn__icon">
              <a href="">
                <ion-icon name="bag-handle-outline" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
