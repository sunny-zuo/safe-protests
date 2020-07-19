import React from "react";
import "../../css/DrawerToggleButton.css";
import buttonIcon from "../../img/menu-icon.jpg";

const DrawerToggleButton = (props) => (
	<button className="toggle_button" onClick={props.click}>
		{" "}
		{/* once click the sidedrawer will open and App.js state will be set to true */}
		<img className="icon" src={buttonicon} />
	</button>
);

export default DrawerToggleButton;
