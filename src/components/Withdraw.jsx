import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Withdraw = () => {
  return (
    <>
      <Navbar />
      <div className="right">
        <div className="inner-right">
          <div className="topApps">
            <div className="twoapps">
              <span className="sp-icon">
                <AppsOutlinedIcon />
              </span>
              <span>Apps</span>
            </div>
            <div id="SherId" className="twoapps">
              <span className="sp-icon">
                <img
                  src="Images/shibariumIcon.jpg"
                  alt="Shibarium Icon"
                  className="SherIcon"
                />
              </span>
              <span>Sparsh</span>
            </div>
          </div>

          <div id="innerBridge">
            <div id="innerLeft">
              <div className="innerBridgeHeader">
                <h4 className="innerBridgeHeaderinner">Shibarium Bridge</h4>
              </div>
              <div className="innerBridgeText">
                <div className="innerBridgeTextHeading">
                  <h6 className="innerBHeading mb-2">Withdraw Overview:</h6>
                  <span className="innerBridgeSpanText ">
                    The deposit process consists of three transaction
                  </span>
                </div>
                <div className="innerBridgeTextHeading">
                  <h6 className="innerBHeading mb-2">Withdraw Time:</h6>
                  <span className="innerBridgeSpanText">
                    Moving your funds from Shibarium to Ethereum take up to 60
                    mins to 3 hours
                  </span>
                </div>
              </div>

              <div className="innerBridgeEstimationDiv">
                <div className="innerBridgeEstimation">
                  <span className="flex">
                    <img className="pr-2" src="/Images/BoneImage.webp" alt="Ethereum Image" style={{height:"25px", borderRadius:"50%",scale:"1",marginRight:"3px"}} />
                    <span></span > Estimation of GAS fee required
                  </span>
                  <span>$10.00</span>
                </div>
                <div className="innerBridgeEstimation">
                  <span className="flex">
                    <img className="pr-2" src="/Images/EthereumImage.jpg" alt="Ethereum Image" style={{height:"25px", borderRadius:"50%",scale:"1",marginRight:"3px"}} />
                    <span></span> Estimation of GAS fee required
                  </span>
                  <span>$10.00</span>
                </div>
              </div>
              <div className="innerBridgeButtons">
                <button className="innerBBEqual bg-[#E9E9EC] text-[#596380] font-medium mt-1 ">How Shibarium works</button>
                <button className="innerBBEqual bg-[#E9E9EC] text-[#596380] font-medium mt-1 ">FAQs</button>
              </div>
            </div>

            <div id="innerRight">
              <div className="innerRightDW p-2">
                <Link to="/bridge">
                  <button className="innerRightDWDWExcept">Deposit</button>
                </Link>

                <Link to="/withdraw">
                  <button className="innerRightDWDW">Withdraw</button>
                </Link>
              </div>
              <div className="innerRightMajor">
                <p className="innerFrom">From</p>
                <div>
                  <div className="EtherumChain">
                    <span className="flex "><img src="/Images/shibariumIcon.jpg" alt="Bone" style={{height:"20px", borderRadius:"50%", marginRight:"5px"}} />
                      <span>Shibarium Mainnet</span>
                    </span>
                    <span>
                      Balance:{" "}
                      <span style={{ color: "#151B28", fontWeight: "700" }}>
                        100.00 BONE
                      </span>
                    </span>
                  </div>
                  <div className="ethCurrency">
                    <span className="ethCurrencyEth"><img src="/Images/BoneImage.webp" alt="Bone" style={{height:"25px", borderRadius:"50%"}} />
                      <span>BONE</span></span>
                    <div>
                      <span className="ethCurrencyMax">
                        0.00{" "}
                        <span style={{ color: "#F28b03", fontWeight: "700" }}>
                          MAX
                        </span>
                      </span>
                    </div>
                  </div>
                  <p className="ethCurrencyP">To</p>
                  <div className="ToShibariumChain">
                    <span className="flex"><img src="/Images/EthereumImage.jpg" alt="Ethereum Image" style={{height:"25px", borderRadius:"60%",scale:"1", marginRight:"5px"}} />
                      <span>Ethereum Chain</span>
                    </span>
                    <span>
                      Balance:{" "}
                      <span style={{ color: "#151B28", fontWeight: "700" }}>
                        0ETH
                      </span>
                    </span>
                  </div>
                </div>
                <div className="transferButton">
                  <button className="tBtn">Transfer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
