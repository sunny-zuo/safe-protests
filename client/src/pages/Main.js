import React from "react";
import "./css/Main.css";
import safeprotest from "./img/safe-protests.png";
import or from "./img/or.png";

const Main = () => {
	return (
		<div>
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

				<p className="text">
				<h1 className="title">
					About Safe Protests
				</h1>
					Safe Protests is a web app created by Carol, Rahul, Sunny and Umar for
					Set.Hacks() 2020.{" "}
				<p style={{paddingBottom: "250px"}}>
					From the womens' suffrage movement to Martin Luther King Jr.'s rallies,
					citizens has always relied on protests and public demonstrations to make
					change happen. With recent events in mind, it is becoming apparent that
					protesters need a way to protect themselves and stay informed during the
					middle of a protest or strike. Safe Protests is an app for organizing
					and staying safe during protests, providing live updates from protest
					organizers, information about protester rights, marking dangerous
					locations on a live-updated map, and the ability to notify contacts with
					a participant's last location if something goes wrong.
				</p>
				<img src="https://media4.s-nbcnews.com/j/newscms/2020_26/3392396/200624-blm-protest-jm-1402_cbd89c5bb57ab5b92c133713bac6adab.fit-760w.jpg" style={{float: 'center'}} alt="Mlk"></img>
			</p>
		</div>
	);
};

export default Main;
