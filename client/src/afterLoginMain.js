import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import database from "../../server/database.js"

const afterLoginMain = () => {
    return (
		<div className="body">
			<div className="title-container">
				<img src={safeprotest}></img>
                <script src = "feed.js"></script>
			</div>
			<h1 className="text">Feed</h1>
		</div>
	);
};

export default afterLoginMain;
