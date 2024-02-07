import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaidIcon from "@mui/icons-material/Paid";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import BookIcon from "@mui/icons-material/Book";
import BuildIcon from "@mui/icons-material/Build";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="left">
        <div className="logo-div">
          <span className="ico">
            <Link to="/">
              <img
                src="./Images/shibariumIcon.jpg"
                alt="Shibarium Icon"
                className="SherIcon border-2"
              />
            </Link>
          </span>
          <Link to="/">
            <h4 className="heading text-2xl">SHIBARIUM</h4>
          </Link>
        </div>

        <div className=" navs">
          <ul className="list-icons">
            <Link className="link" to="/">
              <li className="li-item">
                <span className="ico">
                  <AccountBalanceWalletIcon />
                </span>
                Wallet
              </li>
            </Link>

            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <PaidIcon />
              </span>
              Transactions
            </li>
            </Link>

            <Link className="link" to="/bridge">
              <li className="li-item">
                <span className="ico">
                  <ImportExportIcon />
                </span>
                Bridge
              </li>
            </Link>

            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <SwapVerticalCircleIcon />
              </span>
              Swap token
            </li>
            </Link>
            

            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <BoltIcon />
              </span>
              Gas token
            </li>
            </Link>
            
          </ul>
        </div>

        <div className="extras">
          <ul className="list-icons">

            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <BookIcon />
              </span>
              FAQs
            </li>
            </Link>
            
            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <BuildIcon />
              </span>
              Developer Tools
            </li>
            </Link>
            
            <Link className="link" to="/">
            <li className="li-item">
              <span className="ico">
                <CircleOutlinedIcon />
              </span>
              Support
            </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
