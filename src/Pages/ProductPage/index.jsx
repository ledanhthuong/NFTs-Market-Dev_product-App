import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { PATHS } from "../../constant/pathnames";
import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";

export const ProductPage = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const [provider, setProvider] = useState(null);
  const [productContract, setProductContract] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  // Kết nối với nút MetaMask hoặc trình duyệt có thể kết nối với Ethereum
  const connectToWallet = async () => {
    try {
      // Chờ tài khoản được kết nối
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected account: ' + accounts[0]);

      // Tạo một nhà cung cấp ethers từ tài khoản đã kết nối
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(newProvider);

      // Thay thế 'YOUR_CONTRACT_ADDRESS' và 'CONTRACT_ABI' với thông tin thực tế của hợp đồng
      const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
      const contractAbi = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "addPlayer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "playerAddress",
              "type": "address"
            }
          ],
          "name": "changePlayerLevel",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "playerAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "enum Firstcoin.Level",
              "name": "playerLevel",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "createTime",
              "type": "uint256"
            }
          ],
          "name": "PlayerAdded",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "send",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Sent",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "playerAddress",
              "type": "address"
            }
          ],
          "name": "getPlayerLevel",
          "outputs": [
            {
              "internalType": "enum Firstcoin.Level",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minter",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "playerCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "players",
          "outputs": [
            {
              "internalType": "address",
              "name": "playerAddress",
              "type": "address"
            },
            {
              "internalType": "enum Firstcoin.Level",
              "name": "playerLevel",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "createTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];
      const newContract = new ethers.Contract(contractAddress, contractAbi, newProvider.getSigner());
      setProductContract(newContract);
    } catch (error) {
      console.log("Error connecting to wallet: " + error.message);
    }
  };

  // Kiểm tra xem trình duyệt có hỗ trợ Web3 không
  if (window.ethereum) {
    connectToWallet();
  } else {
   console.log(
     "Web3 not detected. Please install MetaMask or use a Web3-enabled browser."
   );
  }
}, []);

const handleBuy = async () => {
  try {
    if (!provider || !productContract) {
      throw new Error('Wallet not connected. Make sure your wallet is connected.');
    }

    setLoading(true);

    // Kiểm tra số dư của người dùng
    const accounts = await provider.listAccounts();
    const balanceInWei = await provider.getBalance(accounts[0]);
    const requiredBalance = ethers.utils.parseEther('0.02');

    if (balanceInWei.lt(requiredBalance)) {
      throw new Error('Số dư không đủ. Vui lòng nạp thêm tiền vào tài khoản của bạn.');
    }

    // Gửi giao dịch
    const transaction = await productContract.buyProduct({
      value: requiredBalance,
    });

    setLoading(false);

    console.log("Giao dịch thành công. Hash giao dịch: " + transaction.hash);
    // Cập nhật giao diện người dùng hoặc thực hiện các hành động bổ sung sau giao dịch thành công
  } catch (error) {
   console.log("Giao dịch thất bại: " + error.message);
    // Xử lý lỗi, ví dụ: hiển thị thông báo lỗi cho người dùng
    setLoading(false);
  }
};

  return (
    <>
      <main className="productdetailpage">
        <section>
          <div className="container">
            <div className="card">
              <i className="icon">
                <img srcSet="./img/user1.jpg 2x" alt="" />
              </i>
              <div className="card-info">
                <h2>Mr.Bean</h2>
                <a href="" className="name">
                  @LuckyS_tar
                </a>
              </div>
            </div>
            <div className="product-detail --grid">
              <div className="product__left">
                <div className="video">
                  <video autoPlay loop className="video" controls muted>
                    <source src="/video/videodemo.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="ralated">
                  <h2 className="heading">Related Product</h2>
                  <div className="product__list">
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
                          <h3 className="title">
                            E-Commerce Website For Shoes
                          </h3>
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
              <div className="product__right">
                <div className="itemcard">
                  <i className="icon">
                    <img srcSet="./img/js.png 2x" alt="" />
                  </i>
                  <div className="card-info">
                    <Link to={PATHS.HOME.LANGUAGE} className="name">
                      <h2>languages programming C</h2>
                      Creator Contract
                    </Link>
                  </div>
                  <div className="img">
                    <img src="./img/back3.jpg" alt="" />
                  </div>
                </div>
                <p className="date">Deployed Jun 2nd 2023</p>
                <h1 className="titleproduct">FinaceFlow Website</h1>
                <div className="info">
                  <div className="edition">
                    <p>Open edition</p>
                    <div className="price">
                      <i>
                        <img srcSet="./img/icon_tienao.jpg 2x" alt="" />
                      </i>
                      <span className="name">0.02</span>
                    </div>
                  </div>
                  <div className="minted">
                    <p>Pieces minted</p>
                    <span className="name">0 / 10</span>
                  </div>
                </div>
                <div className="btn">
                  <div class="btn">
                    <p class="btn__buy" onClick={handleBuy}>
                      BUY NOW
                    </p>
                   
                  </div>
                </div>
                <div className="detail">
                  <p className="des">Description </p>
                  <p>
                    We are proud to present our latest product: the FinanceFlow
                    Website! Built with cutting-edge technology, modern
                    features, and an elegant design, FinanceFlow Website is not
                    just a product; it's a leap into the next era of technology.
                    <br />
                    <br />
                    FinanceFlow Website not only helps you efficiently manage
                    your finances but also meets the demands of the future. With
                    breakthrough features and unparalleled performance, this
                    product will provide a unique and incredible user
                    experience.
                    <br /> <br />
                    Explore the FinanceFlow Website and experience its
                    convenience, flexibility, and power, highlighting every
                    aspect of your financial management. With us, you not only
                    own a financial management website but also become part of a
                    technological revolution at your fingertips.
                  </p>
                </div>
                <div className="share">
                  <p className="des">Share this artwork</p>
                  <div className="item">
                    <i>
                      <img src="./img/heart-solid (1).svg" alt="" />
                      <span>47</span>
                    </i>
                    <i>
                      <img src="./img/eye-regular.svg" alt="" />
                      <span>12</span>
                    </i>
                    <i>
                      <img src="./img/cart-shopping-solid.svg" alt="" />
                      <span>92</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
