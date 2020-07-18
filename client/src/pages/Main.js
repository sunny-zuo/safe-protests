import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";

const Main = () => {
	return (
		<div className="body">
			<div className="title-container">
				<img src={safeprotest}></img>
			</div>

			<p className="text">Keeping people safe during protests with live updates and info</p>
		</div>
	);
};

export default Main;
