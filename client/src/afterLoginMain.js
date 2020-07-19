import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";

const afterLoginMain = () => {
	return (
		<div className="body">
			<div className="title-container">
				<img src={safeprotest}></img>
			</div>
			<h1 className="text">
				Feed
			</h1>
		</div>
	);
};

export default afterLoginMain;
