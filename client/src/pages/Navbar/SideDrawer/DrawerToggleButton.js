import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
	<button className="toggle_button" onClick={props.click}>
		{" "}
		{/* once click the sidedrawer will open and App.js state will be set to true */}
		<div className="toggle_button_line" />
		<div className="toggle_button_line" />
		<div className="toggle_button_line" />
	</button>
);

export default DrawerToggleButton;
