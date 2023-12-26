import React, { useEffect, useState } from "react";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "0x18A114672E444EA6F86ACb15C422970489f7af58";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export const LoginForm = () => {
  // const [accountId, setAccountId] = useState(null);

  // useEffect(() => {
  //   // Initialize the Web3Modal
  //   const web3Modal = createWeb3Modal({ wagmiConfig, projectId, chains });

  //   // Handle login with MetaMask
  //   const handleMetamaskLogin = async () => {
  //     try {
  //       const provider = await web3Modal.connect();
  //       // Do something with the connected provider, e.g., get the account ID
  //       const accounts = await provider.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAccountId(accounts[0]);
  //     } catch (error) {
  //       console.error("Error connecting to MetaMask:", error);
  //     }
  //   };

  //   // Cleanup function for the useEffect
  //   return () => {
  //     // Disconnect the provider when the component unmounts
  //     web3Modal.clearCachedProvider();
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <WagmiConfig config={wagmiConfig}></WagmiConfig>
      <section className="connectPage">
        <div className="container">
          <img src="./img/cancel.png" alt="" className="icon" />
          <div className="logo">
            <img srcSet="./img/logo.png 2x " alt="" />
          </div>
          <div className="connect">
            <div className="text">
              <h2>Connect wallet</h2>
              <p>Select your favourite wallet to log in Rarible.</p>
            </div>
            <div className="btn" id="metamaskBtn">
              <i>
                <img
                  src="./img/SVG_MetaMask_Icon_Color.svg"
                  alt="MetaMask Logo"
                />
              </i>
              <span>MetaMask</span>
            </div>

            <div href="" className="btn">
              <i>
                <img src="./img/wallet-connect-logo (1).svg" alt="" />
              </i>
              <w3m-button />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
