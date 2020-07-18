import React from "react";
import "./css/style.css";

const AddProtest = () => {
	return (
		<div className="body" style={{textAlign: "left"}}>
			<div className="text">
				<h1 className="title">
					Add A New Protest
				</h1>


				<h2 className="subtitle">
					1. Name your protest: 
				</h2>


				<h2 className="subtitle">
					2. Date of event: 
				</h2>

				<h2 className="subtitle">
					3. Location: 
				</h2>

				<h2 className="subtitle">
					4. Add a description!
				</h2>

				<h2 className="subtitle">
					X. Add Organizers: 
				</h2>
			</div>
		</div>
	);
};

export default AddProtest;