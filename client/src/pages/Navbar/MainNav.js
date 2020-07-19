/*
Nav shows up at the top of every page of the web app
Left hand side it has the logo that lets you go to the home page
Right hand side --> navigation buttons that lets you go to real-time and future events
*/
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";

const MainNav = ({ loggedIn, logOut }) => {
	return (
		<div>
			{loggedIn ? (
				<Navbar logOut={logOut}>
					<Link to="/general-tips">
						<div class="sidebar-text">Protest Tips and Advice</div>
					</Link>
					<Link to="/add-protest">
						<div class="sidebar-text">Create Your Own Protest</div>
					</Link>
					<Link to="/browse-protests">
						<div class="sidebar-text">Browse Protests</div>
					</Link>
					<Link to="/your-rights">
						<div class="sidebar-text">Know Your Rights</div>
					</Link>
					<Link to="/terms-of-service">
						<div class="sidebar-text">Terms of Service</div>
					</Link>
				</Navbar>
			) : null}
		</div>
	);
};

export default MainNav;
