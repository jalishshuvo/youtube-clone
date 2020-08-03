import React, { useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsOffSharpIcon from "@material-ui/icons/NotificationsOffSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh-970-80.jpg"
            alt="Youtube logo"
          />
        </Link>
      </div>
      <div className="header__middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          className="header__input"
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsOffSharpIcon className="header__icon" />
        <Avatar
          alt="Cindy Baker"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu81gux9aatt0tH4dV63ecFJgCPfcwEseCW7C1dM=s83-c-mo"
        />
      </div>
    </div>
  );
}

export default Header;
