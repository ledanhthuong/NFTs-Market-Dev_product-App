import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="top">
            <div className="logo">
              <img srcSet="./img/logo.png 2x" alt="" />
            </div>
            <div className="logo__icon">
              <div className="item__img">
                <a href="">
                  <img srcSet="./img/tw.png 2x" alt="" />
                </a>
              </div>
              <div className="item__img">
                <a href="">
                  <img srcSet="./img/fb.png 2x" alt="" />
                </a>
              </div>
              <div className="item__img">
                <a href="">
                  <img srcSet="./img/ds.png 2x" alt="" />
                </a>
              </div>
              <div className="item__img">
                <a href="">
                  <img srcSet="./img/ins.png 2x" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="below">
            <div className="below_left">
              <p className="text">
                © 2023 - DevProduct,
                <br />
                All Right Reserved
              </p>
            </div>
            <div className="item_menu">
              <div className="item">
                <h2 className="title">Marketplace</h2>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Explore</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h2 className="title">Join Us</h2>
                <ul>
                  <li>
                    <a href="#">X</a>
                  </li>
                  <li>
                    <a href="#">Insagram</a>
                  </li>
                  <li>
                    <a href="#">Discord</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h2 className="title">Product</h2>
                <ul>
                  <li>
                    <a href="#">Programming Languages</a>
                  </li>
                  <li>
                    <a href="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
