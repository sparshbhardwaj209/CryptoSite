import React from "react";
import { Link } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
const Bridge = () => {
  return (
    <>
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
                  className="SherIcon border-2"
                />
              </span>
              <span>Sparsh</span>
            </div>
          </div>

          <div id="innerBridge">
            <div id="innerLeft" className="">
              <div className="innerBridgeHeader">
                <h4 className="innerBridgeHeaderinner font-semibold">Shibarium Bridge</h4>
              </div>
              <div className="innerBridgeText">
                <div className="innerBridgeTextHeading">
                  <h6 className="innerBHeading mb-2 mt-3">Transfer Overview:</h6>
                  <span className="innerBridgeSpanText">
                    The deposit process consists of a single transaction
                  </span>
                </div>
                <div className="innerBridgeTextHeading">
                  <h6 className="innerBHeading mb-2">Transfer Time:</h6>
                  <span className="innerBridgeSpanText">
                    Moving your funds from Ethereum to Polygon take up to 10-15
                    Minutes
                  </span>
                </div>
                <div className="innerBridgeTextHeading">
                  <h6 className="innerBHeading mb-2">
                    <span>
                      <ErrorRoundedIcon color="warning" />
                    </span>{" "}
                    Delegation/Staking Advice
                  </h6>
                  <p className="innerBridgeSpanText p-1">
                    Delegation/Staking takes place on Ethereum. Do not deposit
                    funds to Shibarium for this purpose.
                  </p>
                  <p className="innerBridgeSpanText p-1">
                    To delegate or stake please visit the{" "}
                    <span style={{ color: "orange" }}>Staking UI</span>.
                  </p>
                </div>
              </div>

              <div className="innerBridgeEstimation mt-3">
                <span className="flex">
                  <img className="pr-2" src="/Images/EthereumImage.jpg" alt="Ethereum Image" style={{height:"25px", borderRadius:"50%",scale:"1",marginRight:"3px"}} />
                  <span></span> Estimation of GAS fee required
                </span>
                <span>$10.00</span>
              </div>
              <div className="innerBridgeButtons w-full">
                <button className="innerBBEqual bg-[#E9E9EC] text-[#596380] font-medium mt-1">How Shibarium works</button>
                <button className="innerBBEqual bg-[#E9E9EC] text-[#596380] font-medium mt-1 ">FAQs</button>
              </div>
            </div>

            <div id="innerRight" className="md:static">
              <div className="innerRightDW p-2">
                <Link to="/bridge">
                  <button className="innerRightDWDW ">Deposit</button>
                </Link>

                <Link to="/withdraw">
                  <button className="innerRightDWDWExcept">Withdraw</button>
                </Link>
              </div>
              <div className="innerRightMajor">
                <p className="innerFrom">From</p>
                <div>
                  <div className="EtherumChain">
                    <span className="flex"><img className="pr-2" src="/Images/EthereumImage.jpg" alt="Ethereum Image" style={{height:"25px", borderRadius:"60%",scale:"1.10",marginRight:"5px"}} />
                      <span>Ethereum chain</span>
                    </span>
                    <span>
                      Balance:{" "}
                      <span style={{ color: "#151B28", fontWeight: "700" }}>
                        100.00 ETH
                      </span>
                    </span>
                  </div>
                  <div className="ethCurrency">
                    <span className="ethCurrencyEth"><img src="/Images/EthereumImage.jpg" alt="Ethereum Image" style={{height:"25px", borderRadius:"60%",scale:"1"}} />
                      <span>ETH</span>
                    </span>
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
                    <span className="flex"><img className="pr-2 border-2" src="/Images/shibariumIcon.jpg" alt="Bone" style={{height:"20px", borderRadius:"50%", marginRight:"5px"}} />
                      <span>Shibarium Chain</span>
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

export default Bridge;
