import React from "react";
import "./css/style.css";
import "./css/YourRights.css";

import flagcan from "./img/flag-can.png";
import flaguk from "./img/flag-uk.png";
import flagus from "./img/flag-us.png";

const YourRights = () => {
	return (
		<div className="body">
			<h1 className="title">Your Rights During a Protest</h1>
			<div className="text">
				<p><b>Protesting has inherent risks.</b> Knowing your human rights is a crucial part to having a safe and successful protest.</p>
				<p>Please take the time to familiarize yourself with the protester rights in your country so that you are capable of navigating difficult and/or potentially dangerous situations.</p>

				{/* Buttons */}
				<a href="https://ccla.org/cclanewsite/wp-content/uploads/2017/01/marchrights-1.pdf" className="rights-btn">
					<div className="flag-container">
						<img className="flag" src={flagcan}/>
					</div>
					CANADA
				</a> 
				<br/>
				<a href="https://www.daslaw.co.uk/blog/right-to-peaceful-protest" className="rights-btn">
					<div className="flag-container">
						<img className="flag" src={flaguk}/>
					</div>
					UNITED KINGDOM
				</a> 
				<br/>
				<a href="https://www.aclu.org/know-your-rights/protesters-rights/" className="rights-btn">
					<div className="flag-container">
						<img className="flag" src={flagus}/>
					</div>
					UNITED STATES
				</a> 
			</div>

		</div>
	);
};

export default YourRights;
