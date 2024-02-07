import React from "react";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <>
      <div className="right ">
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

          <div className="myBalance text-2xl -tracking-tight">
            <h4>My Balance</h4>
          </div>

          <div className="views">
            <div className="amount">
              <span className="inner-amount xl:text-3xl">20.000$</span>
              <p className="inner-shi ">SHIBARIUM MAINNET</p>
            </div>

            <div className="views-btns">
              <div className="bton">
                <span className="bton-icon">
                  <QrCode2OutlinedIcon />
                </span>
                <span>Recieve</span>
              </div>
              <div className="bton">
                <span className="bton-icon">
                  <SendOutlinedIcon />
                </span>
                <span>Send</span>
              </div>
            </div>

            <div className="views-txts">
              <div className="views-text">
                <p className="views-text-p">
                  Move funds from Ethereum to Shibarium
                </p>
              </div>
              <div className="views-text">
                <p className="views-text-p">How Shibarium works</p>
              </div>
            </div>
          </div>
          <div className="Body-Header">
            <h5>Assets on Shibarium</h5>
          </div>

          <div className="tableView">
            <div className="table-heading">
              <ul className="table-headers text-xl font-sans pl-12 text-[#E9E9EC]">
                <li>Name</li>
                <li>Balance</li>
                <li className="extra-spacing">Actions</li>
                <li>
                  <input
                    type="text"
                    placeholder="Search"
                    className="table-search"
                  />
                </li>
              </ul>
            </div>
            <div className="table-data">
              <ul className="table-rows mt-3">
                <li className="tokenName font-medium">
                  SHIB <span className="text-[#E9E9EC] font-normal">- Shibatoken</span>
                </li>
                <li>0.0000-0.00$</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Send</li>
              </ul>
              <ul className="table-rows mt-3">
                <li className="tokenName font-medium">
                  MATIC <span className="text-[#E9E9EC] font-normal">- Polygon&nbsp;&nbsp;</span>
                </li>
                <li>0.0000-0.00$</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Send</li>
              </ul>
              <ul className="table-rows mt-3">
                <li className="tokenName font-medium">
                  BNB{" "}
                  <span className="text-[#E9E9EC] font-normal">
                    -
                    BNB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </li>
                <li>0.0000-0.00$</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Send</li>
              </ul>
              <ul className="table-rows mt-3">
                <li className="tokenName font-medium">
                  USDC <span className="text-[#E9E9EC] font-normal">- USD Circle</span>
                </li>
                <li>0.0000-0.00$</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Send</li>
              </ul>
              <ul className="table-rows mt-3 mb-4">
                <li className="tokenName font-medium">
                  ETH{" "}
                  <span className="text-[#E9E9EC] font-normal">- Etherium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </li>
                <li>0.0000-0.00$</li>
                <li>Deposit</li>
                <li>Withdraw</li>
                <li>Send</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
