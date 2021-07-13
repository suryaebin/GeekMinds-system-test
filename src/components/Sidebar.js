import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import EuroSymbolOutlinedIcon from "@material-ui/icons/EuroSymbolOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav className="nav-wrapper">
        <span className="menu-title-span">
          <em>MENU</em>
        </span>
        <div className="side-menu">
          <a className="menu-icon" href="!#">
            <span className="guide-icon">
              <HomeIcon />
            </span>
            Dashboards
          </a>
          <div className="dash">
            <a className="dash-menu">Default</a>
            <a className="dash-menu">Saas</a>
            <a className="dash-menu">Crypto</a>
            <a className="dash-menu">Blog</a>
          </div>
        </div>
        <span className="menu-title-span">
          <em>APPS</em>
        </span>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <DateRangeIcon />
          </span>
          Calendar
        </a>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <QuestionAnswerOutlinedIcon />
          </span>
          Chat
        </a>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <DescriptionOutlinedIcon />
          </span>
          File Manager
        </a>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <AccountBalanceOutlinedIcon />
          </span>
          Eccomerce
        </a>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <EuroSymbolOutlinedIcon />
          </span>
          Crypto
        </a>
        <a className="menu-icon" href="!#">
          <span className="guide-icon">
            <EmailOutlinedIcon />
          </span>
          Email
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
