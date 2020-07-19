import React, { Component } from "react";
import "./css/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddProtest extends Component {
	state = {
		startDate: new Date(),
	};

	handleChange = (date) => {
		this.setState({
			startDate: date,
		});
	};
	render() {
		return (
			<div className="body" style={{ textAlign: "left" }}>
				<div className="text">
					<h1 className="title">Add A New Protest</h1>

					<form>
						<h2 className="subtitle">1. Name your protest:</h2>
						<input
							type="text"
							id="fname"
							className="input-field"
							name="fname"
							placeholder="Input a name"
						></input>

						<h2 className="subtitle">2. Date of event:</h2>
						<DatePicker
							selected={this.state.startDate}
							onChange={this.handleChange}
							showTimeSelect
						/>
						<h2 className="subtitle">3. Location:</h2>
						<input
							type="text"
							id="lname"
							className="input-field"
							name="lname"
							placeholder="Address"
						></input>
						<h2 className="subtitle">4. Add a description!</h2>
						<input
							type="textarea"
							id="desc"
							style={{ height: "200px" }}
							name="desc"
							placeholder=""
						></input>

						{/* If we are to add this section we'd have to get database of user profiles */}
						<h2 className="subtitle">X. Add Organizers:</h2>
						<input
							type="text"
							className="input-field"
							placeholder="Doe"
						></input>
					</form>
				</div>
			</div>
		);
	}
}

export default AddProtest;
