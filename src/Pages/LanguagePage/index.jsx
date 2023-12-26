import React from 'react'
import { useAuthen } from "../../components/AuthenContext";
import { PATHS } from "../../constant/pathnames";
import { Link } from "react-router-dom";

export const LanguagePage = () => {
    const handleLinkClick = () => {
      // Cuộn về đầu trang khi liên kết được click
      window.scrollTo(0, 0);
    };
  return (
    <>
      <section className="languagepage">
        <div className="item__img">
          <img src="./img/backJS.webp" alt="" />
        </div>
        <div className="container">
          <div className="top">
            <div className="item_laguages">
              <i className="icon">
                <img srcSet="./img/js.png 2x" alt="" />
              </i>
            </div>
            <div className="item_icon">
              <p className="name">JavaScript</p>
              <div className="icon">
                
                <i>
                  <img srcSet="./img/fb.png 2x" alt="" />
                </i>
                <i>
                  <img srcSet="./img/ds.png 2x" alt="" />
                </i>
                <i>
                  <img srcSet="./img/tw.png 2x" alt="" />
                </i>
                <i>
                  <img srcSet="./img/ins.png 2x" alt="" />
                </i>

                
              </div>
            </div>
          </div>
          <div className="bottom">
            <p className="des1">
              By<span>Dennis Ritchie</span>
            </p>
            <p className="des2">
              Items <span>3</span>· Created <span>Jun 2023</span> · Creator
              earnings <span>70%</span>· Chain
              <span>Etherum</span> · <span>Languages</span>
            </p>
            <p className="des3">
              JavaScript can be utilized in developing cryptocurrency
              applications like Bitcoin and Ethereum, creating interactive user
              interfaces and displaying transaction data on websites.
            </p>
            <p className="des4">
              JavaScript is a programming language primarily used for web
              development, enhancing websites with dynamic and interactive
              features. Integrated directly into HTML, it performs functions
              such as content manipulation, user interaction, and server
              communication without reloading the page. Extending beyond the
              browser, JavaScript is employed in server-side development and
              mobile applications through platforms like Node.js.
            </p>
          </div>
          <div className="line"></div>
          <div className="ralated">
            <h2 className="heading">Related Product</h2>
            <div className="product__list --grid --layout-3">
              <div className="product-item">
                <Link
                  to={PATHS.HOME.PRODUCT}
                  className="thumbnail"
                  onClick={handleLinkClick}
                >
                  <img src="./img/demo1.PNG" alt="" />
                </Link>

                <div className="content">
                  <Link
                    to={PATHS.HOME.PRODUCT}
                    className="top"
                    onClick={handleLinkClick}
                  >
                    <i className="icon">
                      <img srcSet="./img/icon_lanJS.jpg 2x" alt="" />
                    </i>
                    <h3 className="title">FinaceFlow Website </h3>
                    <svg
                      display="flex"
                      width={25}
                      height={25}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                        fill="#feda03"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                        fill="#000000"
                      />
                    </svg>
                    <img src="" alt="" />
                  </Link>
                  <div className="bottom">
                    <div className="left">
                      <span className="des">Status</span>
                      <span className="status">4 days</span>
                    </div>
                    <div className="right">
                      <span className="des">Price</span>
                      <span className="status">0.67 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-item">
                <Link
                  to={PATHS.HOME.PRODUCT}
                  className="thumbnail"
                  onClick={handleLinkClick}
                >
                  <img src="./img/demo2.jpg" alt="" />
                </Link>

                <div className="content">
                  <Link
                    to={PATHS.HOME.PRODUCT}
                    className="top"
                    onClick={handleLinkClick}
                  >
                    <i className="icon">
                      <img srcSet="./img/icon_lanJS.jpg 2x" alt="" />
                    </i>
                    <h3 className="title">E-Commerce Website For Shoes</h3>
                    <svg
                      display="flex"
                      width={25}
                      height={25}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                        fill="#feda03"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                        fill="#000000"
                      />
                    </svg>
                    <img src="" alt="" />
                  </Link>
                  <div className="bottom">
                    <div className="left">
                      <span className="des">Status</span>
                      <span className="status">10 days</span>
                    </div>
                    <div className="right">
                      <span className="des">Price</span>
                      <span className="status">0.98 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-item">
                <Link
                  to={PATHS.HOME.PRODUCT}
                  className="thumbnail"
                  onClick={handleLinkClick}
                >
                  <img src="./img/demo3.jpg" alt="" />
                </Link>
                <div className="content">
                  <Link
                    to={PATHS.HOME.PRODUCT}
                    className="top"
                    onClick={handleLinkClick}
                  >
                    <i className="icon">
                      <img srcSet="./img/icon_lanJS.jpg 2x" alt="" />
                    </i>
                    <h3 className="title">
                      Fashion Ecommerce Website JavaScript
                    </h3>
                    <svg
                      display="flex"
                      width={30}
                      height={30}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                        fill="#feda03"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                        fill="#000000"
                      />
                    </svg>
                    <img src="" alt="" />
                  </Link>
                  <div className="bottom">
                    <div className="left">
                      <span className="des">Status</span>
                      <span className="status">2 days</span>
                    </div>
                    <div className="right">
                      <span className="des">Price</span>
                      <span className="status">0.19 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
