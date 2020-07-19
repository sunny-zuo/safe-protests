import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import or from "./img/or.png";

const Main = () => {
	return (
		<div className="body">
			<div className="title-container">
				<img class=".img" src={safeprotest}></img>
			</div>
			<p className="text">
				Keeping people safe during protests with live updates and info
			</p>
			<a className="btn" href="#">SIGN IN</a>
			<div className="or-container">
				<img class=".img" src={or}></img>
			</div>
			<a className="btn" href="#">REGISTER</a>
		</div>
	);
};

export default Main;
