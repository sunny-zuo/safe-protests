import React, { Component } from 'react';
import "./Toolbar.css";
import menuicon from "./../../img/menu-icon.png";
import usericon from "./../../img/user-icon.png";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
        <div>
            <ul>
                <li className="profile-pic"><img src={menuicon}></img></li>
                {/* We can also dynamically update the user icon */}
                <li className="sidebar-icon"><img src={usericon}></img></li>
            </ul>
        </div>
        </nav> 
    </header>

);

export default toolbar;