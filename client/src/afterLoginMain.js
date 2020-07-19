import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import database from "database"

const afterLoginMain = () => {
    const post = new database();
    var data = post.getProtests()
    data.forEach((data) => {
        // Log each movie's title
        console.log(data.title)
      })
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
