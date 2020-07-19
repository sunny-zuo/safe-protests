import React from "react";
// import "./css/style.css";

const MakeNewPost = () => {
	return (
		<div className="body">
			<div className="text">
				<h1 className="title">
					Post an Update
				</h1>

  					<input type="text" id="post-title" className="input-field" name="post-title" placeholder="Title Your Post (optional)"></input>
					<input type="textarea" rows="10" style={{height: "200px"}} id="post-cont" className="input-field" name="post-cont" placeholder="Post Content (required)"></input>

                    <button className="main-btn">Make Post</button>
			</div>
		</div>
	);
};

export default MakeNewPost;