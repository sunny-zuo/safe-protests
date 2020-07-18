import React, { Component } from 'react';
import "./Toolbar.css";
import menuicon from "./../../img/menu-icon.png";
import usericon from "./../../img/user-icon.png";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            {/* We can also dynamically update the user icon when signed in */}
            <div className="sidebar-icon"><img src={menuicon}></img></div>
            <div className="profile-pic"><img src={usericon}></img></div>
        </nav> 
    </header>

);

export default toolbar;