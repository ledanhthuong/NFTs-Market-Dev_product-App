import React from 'react'
import { useAuthen } from '../../components/AuthenContext';
import { PATHS } from '../../constant/pathnames';
import { Link } from 'react-router-dom';


export const HomePage = () => {
  const handleLinkClick = () => {
    // Cuộn về đầu trang khi liên kết được click
    window.scrollTo(0, 0);
  };
  const {openAuthenModal} = useAuthen();
  return (
    <>
      <main className="homepage">
        <section className="slider">
          {/* Slider Moving */}
          <div className="slider__item-wrap" data-carousel="">
            {/* Slider Item 1 */}
            <div className="slider__item">
              <div className="slider__item-video">
                <div className="slidevideo">
                  {/* <video autoplay loop class="video" muted plays-inline>
                                      <source src="./img/video.mp4" type="video/mp4">
                                  </video> */}
                  <img className="video" src="./img/back1.png" alt="" />
                </div>
                <div className="content">
                  <div className="textbox">
                    <h1 className="title">
                      {" "}
                      <span>Introducing DevProduct</span>
                    </h1>
                    <p className="des">
                      Our vision is to empower brands &amp; creators to launch
                      their digital products &amp; to cultivate vibrant and
                      sustainable communities. Let's build, innovate, &amp; lead
                      the way in ushering the next million people into web3,
                      together.
                    </p>
                  </div>
                  <div className="btn">
                    <div className="btn--black1">
                      <span>Read More</span>
                    </div>
                  </div>
                </div>
              </div>
              <picture className="slider__item-img">
                <source
                  media="(max-width: 576px)"
                  srcSet="./img/hero_wooder1-m.jpg 1.5x"
                />
                <img srcSet="./img/back.jpg 1.5x" alt="" />
              </picture>
            </div>
            {/* Slider Item 2 */}
            <div className="slider__item">
              <div className="slider__item-video">
                <div className="slidevideo">
                  <video autoPlay className="video">
                    <source src="/video/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="content">
                  <div className="textbox">
                    <h1 className="title">Pudgy Penguins</h1>
                    <p className="des">
                      Pudgy Penguins is a collection of 8,888 ETH’s,
                      accelerating Web3 innovation through IP utilization and
                      community empowerment. Embodying love, empathy, &amp;
                      compassion, the Pudgy Penguins are a beacon of good vibes
                      &amp; positivity for everyone
                    </p>
                  </div>
                  <div className="btn">
                    <div className="btn--black">
                      <span>Explore Now</span>
                    </div>
                  </div>
                </div>
              </div>
              <picture className="slider__item-img">
                <source
                  media="(max-width: 576px)"
                  srcSet="./img/hero_wooder1-m.jpg 1.5x"
                />
                <img src="./img/back_2.webp" alt="" />
              </picture>
            </div>
            {/* Slider Item 3 */}
            <div className="slider__item">
              <div className="slider__item-video">
                <div className="slidevideo">
                  {/* <video autoplay loop class="video" muted plays-inline>
                                      <source src="./img/video.mp4" type="video/mp4">
                                  </video> */}
                  <img className="video" srcSet="./img/back_3.jpeg 2x" alt="" />
                </div>
                <div className="content">
                  <div className="textbox">
                    <h1 className="title">Language JavaStrips</h1>
                    <p className="des">
                      JavaStrips is an efficient JavaScript library optimized
                      for string processing in web development. With its
                      easy-to-use syntax, it reduces complexity and increases
                      code efficiency, providing a smooth and efficient
                      programming experience. English
                    </p>
                  </div>
                  <div className="btn">
                    <div className="btn--black">
                      <span>Learn More</span>
                    </div>
                    <div className="btn--yellow">
                      <span>Contact Us</span>
                    </div>
                  </div>
                </div>
              </div>
              <picture className="slider__item-img">
                <source
                  media="(max-width: 576px)"
                  srcSet="./img/hero_wooder1-m.jpg 1.5x"
                />
                <img src="./img/back3.jpg " alt="" />
              </picture>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="language">
            <div className="language__title">
              <h2 className="heading">Trending</h2>
              <div className="tag active" onclick="changeTag(0)">
                Collections
              </div>
              <div className="tag" onclick="changeTag(1)">
                Marketplaces
              </div>
            </div>
            <div className="language__course">
              <div className="tabs__btn">
                <div className="tab active" data-tabs={1}>
                  1H
                </div>
                <div className="tab" data-tabs={2}>
                  1D
                </div>
                <div className="tab" data-tabs={3}>
                  7D
                </div>
                <div className="tab" data-tabs={4}>
                  30D
                </div>
              </div>
            </div>
            <div className="course__item-wrap">
              <div className="course__item ">
                <div className="course__name">
                  <p className="number">#</p>
                  <p className="name">NAME</p>
                  <p className="floor">FLOOR PRICE</p>
                  <p className="change">FLOOR CHANGE</p>
                  <p className="volume">VOLUME</p>
                  <p className="items">ITEMS</p>
                  <p className="owners">OWNERS</p>
                </div>
                <div className="course__table new__item-1 active">
                  {" "}
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">1</p>
                    <div className="item__name">
                      <img srcSet="./img/c.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C++</p>
                    </div>
                    <div className="item__floor">
                      29.7
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+0.1%</p>
                    <div className="item__volume">
                      16,972
                      <span>ETH</span>
                    </div>
                    <p className="item__items">10K</p>
                    <p className="item__owners">5.8K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">2</p>
                    <div className="item__name">
                      <img srcSet="./img/csharp.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C-Sharp</p>
                    </div>
                    <div className="item__floor">
                      12.29
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+58.6%</p>
                    <div className="item__volume">
                      8,152
                      <span>ETH</span>
                    </div>
                    <p className="item__items">9K</p>
                    <p className="item__owners">2.6K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">3</p>
                    <div className="item__name">
                      <img srcSet="./img/js.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Javascript</p>
                    </div>
                    <div className="item__floor">
                      5.586
                      <span>ETH</span>
                    </div>
                    <div className="item__change">
                      <p>-1.5%</p>
                    </div>
                    <div className="item__volume">
                      4,900
                      <span>ETH</span>
                    </div>
                    <p className="item__items">12K</p>
                    <p className="item__owners">6K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">4</p>
                    <div className="item__name">
                      <img srcSet="./img/python.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Python</p>
                    </div>
                    <div className="item__floor">
                      3.249
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+11.4%</p>
                    <div className="item__volume">
                      4,394
                      <span>ETH</span>
                    </div>
                    <p className="item__items">21K</p>
                    <p className="item__owners">8k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">5</p>
                    <div className="item__name">
                      <img srcSet="./img/php.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>PHP</p>
                    </div>
                    <div className="item__floor">
                      5.59
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+1.4%</p>
                    <div className="item__volume">
                      1,494
                      <span>ETH</span>
                    </div>
                    <p className="item__items">31K</p>
                    <p className="item__owners">18k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">6</p>
                    <div className="item__name">
                      <img srcSet="./img/java.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Java</p>
                    </div>
                    <div className="item__floor">
                      19.18
                      <span>ETH</span>
                    </div>
                    <p className="item__change">-10.2%</p>
                    <div className="item__volume">
                      6,94
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">10k</p>
                  </Link>
                </div>
                <div className="course__table new__item-2">
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">1</p>
                    <div className="item__name">
                      <img srcSet="./img/csharp.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C-Sharp</p>
                    </div>
                    <div className="item__floor">
                      30.7
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+1.5%</p>
                    <div className="item__volume">
                      11,472
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">5.8K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">2</p>
                    <div className="item__name">
                      <img srcSet="./img/java.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Java</p>
                    </div>
                    <div className="item__floor">
                      14.49
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+12.6%</p>
                    <div className="item__volume">
                      21,52
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">2.1K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">3</p>
                    <div className="item__name">
                      <img srcSet="./img/js.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Javascript</p>
                    </div>
                    <div className="item__floor">
                      12.586
                      <span>ETH</span>
                    </div>
                    <div className="item__change">
                      <p>-0.5%</p>
                    </div>
                    <div className="item__volume">
                      5,900
                      <span>ETH</span>
                    </div>
                    <p className="item__items">13K</p>
                    <p className="item__owners">10K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">4</p>
                    <div className="item__name">
                      <img srcSet="./img/php.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>PHP</p>
                    </div>
                    <div className="item__floor">
                      3.449
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+11.4%</p>
                    <div className="item__volume">
                      4,394
                      <span>ETH</span>
                    </div>
                    <p className="item__items">11K</p>
                    <p className="item__owners">8k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">5</p>
                    <div className="item__name">
                      <img srcSet="./img/python.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Python</p>
                    </div>
                    <div className="item__floor">
                      2.59
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+1.1%</p>
                    <div className="item__volume">
                      1,114
                      <span>ETH</span>
                    </div>
                    <p className="item__items">31K</p>
                    <p className="item__owners">18k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">6</p>
                    <div className="item__name">
                      <img srcSet="./img/c.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C++</p>
                    </div>
                    <div className="item__floor">
                      18.41
                      <span>ETH</span>
                    </div>
                    <p className="item__change">-9.2%</p>
                    <div className="item__volume">
                      6,94
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">10k</p>
                  </Link>
                </div>
                <div className="course__table new__item-3">
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">1</p>
                    <div className="item__name">
                      <img srcSet="./img/java.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Java</p>
                    </div>
                    <div className="item__floor">
                      12.7
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+3.1%</p>
                    <div className="item__volume">
                      11,472
                      <span>ETH</span>
                    </div>
                    <p className="item__items">2K</p>
                    <p className="item__owners">4.8K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">2</p>
                    <div className="item__name">
                      <img srcSet="./img/php.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>PHP</p>
                    </div>
                    <div className="item__floor">
                      19.29
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+54.6%</p>
                    <div className="item__volume">
                      3,552
                      <span>ETH</span>
                    </div>
                    <p className="item__items">19K</p>
                    <p className="item__owners">10K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">3</p>
                    <div className="item__name">
                      <img srcSet="./img/python.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Python</p>
                    </div>
                    <div className="item__floor">
                      5.586
                      <span>ETH</span>
                    </div>
                    <div className="item__change">
                      <p>-2.5%</p>
                    </div>
                    <div className="item__volume">
                      4,900
                      <span>ETH</span>
                    </div>
                    <p className="item__items">12K</p>
                    <p className="item__owners">6K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">4</p>
                    <div className="item__name">
                      <img srcSet="./img/js.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Javascript</p>
                    </div>
                    <div className="item__floor">
                      3.249
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+11.4%</p>
                    <div className="item__volume">
                      4,394
                      <span>ETH</span>
                    </div>
                    <p className="item__items">21K</p>
                    <p className="item__owners">8k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">5</p>
                    <div className="item__name">
                      <img srcSet="./img/c.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C++</p>
                    </div>
                    <div className="item__floor">
                      5.59
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+1.4%</p>
                    <div className="item__volume">
                      1,494
                      <span>ETH</span>
                    </div>
                    <p className="item__items">31K</p>
                    <p className="item__owners">18k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">6</p>
                    <div className="item__name">
                      <img srcSet="./img/csharp.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C-Sharp</p>
                    </div>
                    <div className="item__floor">
                      18.41
                      <span>ETH</span>
                    </div>
                    <p className="item__change">-10.2%</p>
                    <div className="item__volume">
                      6,94
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">10k</p>
                  </Link>
                </div>
                <div className="course__table new__item-4">
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">1</p>
                    <div className="item__name">
                      <img srcSet="./img/js.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Javascript</p>
                    </div>
                    <div className="item__floor">
                      29.7
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+0.1%</p>
                    <div className="item__volume">
                      16,972
                      <span>ETH</span>
                    </div>
                    <p className="item__items">10K</p>
                    <p className="item__owners">5.8K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">2</p>
                    <div className="item__name">
                      <img srcSet="./img/python.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Python</p>
                    </div>
                    <div className="item__floor">
                      12.29
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+58.6%</p>
                    <div className="item__volume">
                      8,152
                      <span>ETH</span>
                    </div>
                    <p className="item__items">9K</p>
                    <p className="item__owners">2.6K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">3</p>
                    <div className="item__name">
                      <img srcSet="./img/c.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C++</p>
                    </div>
                    <div className="item__floor">
                      5.586
                      <span>ETH</span>
                    </div>
                    <div className="item__change">
                      <p>-1.5%</p>
                    </div>
                    <div className="item__volume">
                      4,900
                      <span>ETH</span>
                    </div>
                    <p className="item__items">12K</p>
                    <p className="item__owners">6K</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">4</p>
                    <div className="item__name">
                      <img srcSet="./img/csharp.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>C-Sharp</p>
                    </div>
                    <div className="item__floor">
                      3.249
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+11.4%</p>
                    <div className="item__volume">
                      4,394
                      <span>ETH</span>
                    </div>
                    <p className="item__items">21K</p>
                    <p className="item__owners">8k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">5</p>
                    <div className="item__name">
                      <img srcSet="./img/java.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>Java</p>
                    </div>
                    <div className="item__floor">
                      5.59
                      <span>ETH</span>
                    </div>
                    <p className="item__change">+1.4%</p>
                    <div className="item__volume">
                      1,494
                      <span>ETH</span>
                    </div>
                    <p className="item__items">31K</p>
                    <p className="item__owners">18k</p>
                  </Link>
                  <Link
                    to={PATHS.HOME.LANGUAGE}
                    className="item"
                    onClick={handleLinkClick}
                  >
                    <p className="item__number">6</p>
                    <div className="item__name">
                      <img srcSet="./img/php.png 2x" alt="" />
                      <svg
                        display="flex"
                        width={16}
                        height={16}
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
                      <p>PHP</p>
                    </div>
                    <div className="item__floor">
                      18.41
                      <span>ETH</span>
                    </div>
                    <p className="item__change">-10.2%</p>
                    <div className="item__volume">
                      6,94
                      <span>ETH</span>
                    </div>
                    <p className="item__items">4K</p>
                    <p className="item__owners">10k</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="product">
            <h2 className="heading">Latest drops</h2>
            <div className="line" />
            <div className="product_list --grid --layout-3">
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
              <div className="product-item">
                <Link
                  to={PATHS.HOME.PRODUCT}
                  className="thumbnail"
                  onClick={handleLinkClick}
                >
                  <img src="./img/demo4.jpg" alt="" />
                </Link>
                <div className="content">
                  <Link
                    to={PATHS.HOME.PRODUCT}
                    className="top"
                    onClick={handleLinkClick}
                  >
                    <i className="icon">
                      <img srcSet="./img/icon_lanC2.jpg 2x" alt="" />
                    </i>
                    <h3 className="title">DigitalDynasty Store Manager</h3>
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
                      <span className="status">59 days</span>
                    </div>
                    <div className="right">
                      <span className="des">Price</span>
                      <span className="status">0.22 ETH</span>
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
                  <img src="./img/demo5.jpg" alt="" />
                </Link>
                <div className="content">
                  <Link
                    to={PATHS.HOME.PRODUCT}
                    className="top"
                    onClick={handleLinkClick}
                  >
                    <i className="icon">
                      <img srcSet="./img/icon_lanC2.jpg 2x" alt="" />
                    </i>
                    <h3 className="title">T&amp;T Electronics Store Manager</h3>
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
                      <span className="status">12 days</span>
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
                  <img src="./img/demo6.jpg" alt="" />
                </Link>
                <div className="content">
                  <Link to={PATHS.HOME.PRODUCT} className="top">
                    <i className="icon">
                      <img srcSet="./img/python.png 2x" alt="" />
                    </i>
                    <h3 className="title">Chess Game in Python</h3>
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
                      <span className="status">90 days</span>
                    </div>
                    <div className="right">
                      <span className="des">Price</span>
                      <span className="status">0.67 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* // Thumb */}
          </section>
          <section className="question ">
            <h1 className="heading">ETH 101</h1>
            <div className="line" />
            <div className="question__list --grid --layout-3">
              <div className="product-item">
                <Link href="./product_detail.html" className="thumbnail">
                  <img src="./img/ques1 (2).jpg" alt="" />
                </Link>
                <div className="content">
                  <Link href="#" className="top">
                    <h3 className="title">What is an ETH?</h3>
                  </Link>
                </div>
              </div>
              <div className="product-item">
                <Link href="./product_detail.html" className="thumbnail">
                  <img src="./img/ques2.jpg" alt="" />
                </Link>
                <div className="content">
                  <Link href="#" className="top">
                    <h3 className="title">How to buy an ETH ?</h3>
                  </Link>
                </div>
              </div>
              <div className="product-item">
                <Link href="./product_detail.html" className="thumbnail">
                  <img src="./img/back_3.jpeg" alt="" />
                </Link>
                <div className="content">
                  <Link href="#" className="top">
                    <h3 className="title">What is JavaScript ?</h3>
                  </Link>
                </div>
              </div>
              {/* Repeat this structure for additional rows */}
            </div>
          </section>
        </div>
        <div className="subscribe_container">
          <h2 className="heading">Stay in the loop Get the latest insights</h2>
          <p>
            By clicking send you'll receive occasional emails from Rarible. You
            always have the choice to unsubscribe within every email you
            receive.
          </p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">send →</button> <br />
          </form>
        </div>
      </main>
    </>
  );
}
