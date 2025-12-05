import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div>
      <div className="header_outer_container">
        <div className="header_container">
          <ul className="header_left">
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="150" /> 
            </li>
            <li> Home </li>
            <li> Tvshows</li>
            <li> Movies</li>
            <li> Latest</li>
            <li> Mylist</li>
            <li> Browse by Language</li>
          </ul>
          <ul className="header_right">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon /> 
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header
