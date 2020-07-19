import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	state = {
		sideDrawerOpen: false, //set sidedrawer to be closed initially
	};

	// This function runs when the backdrop is clicked
	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	// This function runs when the sidedrawer button is clicked
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			//prevState is the previous state object
			return {
				sideDrawerOpen: !prevState.sideDrawerOpen, // sets sideDrawerOpen (determines whether or not to show sidedrawer) to the opposite of what it
			};
		});
	};
	render() {
		let backdrop; //orginally set to nothing

		let sidedrawerContent = this.props.children.map((child) => {
			return <div className="sidedrawer_items">{child}</div>;
		});

		if (this.state.sideDrawerOpen) {
			//if sideDrawer is open, then show backdrop
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<div>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />{" "}
				{/* pass button click function to Toolbar*/}
				<SideDrawer
					show={this.state.sideDrawerOpen}
					content={sidedrawerContent}
					logOut={this.props.logOut}
				/>{" "}
				{/*when show is true, sideDrawer appears, when it is false it dissapears*/}
				{backdrop}
			</div>
		);
	}
}
export default Navbar;
