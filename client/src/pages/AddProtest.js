import React, { Component } from "react";
import "./css/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router-dom';

class AddProtest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			name: "",
			location: "",
			description: "",
			organizer: "",
		};
		this.addProtest = this.addProtest.bind(this);
	}

	handleChange = (date) => {
		this.setState({
			startDate: date,
		});
	};

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	updateState(args) {
		if (this._isMounted) {
			this.setState(args);
		}
	}

	addProtest() {
		let reqBody = {
			name: this.state.name,
			location: this.state.location,
			description: this.state.description,
			organizer: this.state.organizer,
			time: this.state.startDate,
		};
		fetch("http://localhost:8000/add_protest", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		}).then(() => {
			this.props.history.push('/browse-protests');
		});
	}

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
							value={this.state.name}
							onChange={(e) => this.updateState({ name: e.target.value })}
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
							value={this.state.location}
							onChange={(e) => this.updateState({ location: e.target.value })}
						></input>
						<h2 className="subtitle">4. Add a description!</h2>
						<input
							type="textarea"
							id="desc"
							style={{ height: "200px" }}
							name="desc"
							placeholder=""
							value={this.state.description}
							onChange={(e) =>
								this.updateState({ description: e.target.value })
							}
						></input>

						{/* If we are to add this section we'd have to get database of user profiles */}
						<h2 className="subtitle">X. Add Organizers:</h2>
						<input
							type="text"
							className="input-field"
							placeholder="Doe"
							value={this.state.organizer}
							onChange={(e) => this.updateState({ organizer: e.target.value })}
						></input>
					</form>
					<div className="btn-container">
						<input
							className="btn login-btn main-btn"
							style={{ margin: "0px", padding: "0px", marginBottom: "130px" }}
							type="button"
							value="Add Event"
							onClick={this.addProtest}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(AddProtest);
