import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import or from "./img/or.png";

const Main = () => {
	return (
		<div className="main-body">
			<div className="main-title-container">
				<img class="img" src={safeprotest}></img>
			</div>
			<p className="main-text">
				Keeping people safe during protests with live updates and info
			</p>

			<div className="main-btn-container">
				<a className="main-btn" href="/login">
					LOG IN
				</a>
				<div className="or-container">
					<img class="img" src={or}></img>
				</div>
				<a href="/registration" className="main-btn">
					REGISTER
				</a>
			</div>
		</div>
	);
};

export default Main;
