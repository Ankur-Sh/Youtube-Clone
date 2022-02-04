import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <img
                    className="header_logo"
                    src="\home\rishabh\Desktop\Articles\react js\Youtube clone\youtube-clone\youtube_logo.jpg
            "
                    alt=""
                />
            </div>
            <div className="header_input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header_inputButton" />
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar alt="avatar" src="" />
            </div>
        </div>
    );
}

export default Header;
