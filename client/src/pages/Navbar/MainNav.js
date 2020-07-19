/*
Nav shows up at the top of every page of the web app
Left hand side it has the logo that lets you go to the home page
Right hand side --> navigation buttons that lets you go to real-time and future events
*/
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";

const MainNav = ({ loggedIn }) => {
	return (
		<div>
			{loggedIn ? (
				<Navbar>
					<Link to="/about-safe-protests">
						<div>About Safe Protests</div>
					</Link>
					<Link to="/browse-protests">
						<div>Browse Events</div>
					</Link>
					<Link to="/your-rights">
						<div>Your Rights</div>
					</Link>
					<Link to="/terms-of-service">
						<div>Terms of Service</div>
					</Link>
					<Link to="/add-protest">
						<div>AddProtests</div>
					</Link>
				</Navbar>
			) : null}
		</div>
	);
};

export default MainNav;
