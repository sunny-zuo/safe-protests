import React from "react";
import "../../css/SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
	let drawerClasses = "sidedrawer";
	if (props.show) {
		//if sidedrawer should be shown (passed down from root component, then add the open class (adds transition)
		drawerClasses = "sidedrawer open";
	}
	return (
		<nav className={drawerClasses}>
			<div className="container">
				{props.content}
				<div className="sidedrawer_items">
					<Link to="/logout">
						<div>Logout</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default SideDrawer;
