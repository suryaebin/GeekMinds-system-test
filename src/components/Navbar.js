import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CropFreeIcon from "@material-ui/icons/CropFree";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewListIcon from "@material-ui/icons/ViewList";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <button className="logo-btn">
          <MenuIcon />
        </button>
        SKOTE
      </div>
      <div className="search">
        <button type="submit" className="search-btn">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search..." />

        <div className="mega-menu">
          <span>
            <em>Mega Menu</em>
          </span>
          <button className="mega-btn">
            <ExpandMoreIcon />
          </button>
        </div>
      </div>
      <div className="menu">
        <button className="menu-btn">
          <CropFreeIcon />
        </button>
        <button className="menu-btn">
          <NotificationsIcon />
        </button>
        <button className="menu-btn">
          <ViewListIcon />
        </button>
        <button className="menu-btn">
          <AccountCircleIcon />
        </button>
        <button className="menu-btn">
          <SettingsIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
