import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class UserRegistration extends Component {
	constructor(props) {
		super(props);
		//state of the user registration page
		this.state = {
			registered: "false",
			name: "",
			email: "",
			password: "",
			confirmpasswordPassword: "",
		};
		this._isMounted = false;
	}

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

	validate = () => {
		let nameError = "";
		let emailError = "";
		let passwordError = "";
		let confirmpasswordError = "";
		let errorExists = 0;

		if (!this.state.name) {
			nameError = "This field cannot be blank";
			errorExists = 1;
		} else if (
			!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
		) {
			emailError = "Invalid email";
			errorExists = 1;
		}

		if (!this.state.password) {
			passwordError = "This field cannot be blank";
			errorExists = 1;
		} else if (this.state.password.length < 8) {
			passwordError = "Password is too short";
			errorExists = 1;
		}

		if (!this.state.confirmpassword) {
			confirmpasswordError = "This field cannot be blank";
			errorExists = 1;
		} else if (this.state.confirmpassword !== this.state.password) {
			confirmpasswordError = "Passwords do not match";
			errorExists = 1;
		}

		this.updateState({
			nameError: nameError,
			emailError: emailError,
			passwordError: passwordError,
			confirmPasswordError: confirmpasswordError,
		});

		if (errorExists) {
			return false;
		} else {
			return true;
		}
	};

	//Submit Registration executes when the form is submitted
	submitRegistration = async (e) => {
		e.preventDefault();
		const valid = this.validate();
		if (valid) {
			console.log("User " + this.state.name + " is signed up!\n");
			this.updateState({ registered: true, error: "" });
			// **DONT FORGET TO add user to userpool
		} else {
			this.updateState({
				error: "Error signing up.  Please try again later",
			});
		}
	};

	render() {
		//check if user is registered, if so send them to the login page
		if (this.state.registered) {
			return <Redirect to="/login" />;
		} else {
			return (
				<div className="box-wide">
					<h1 className="head"> User Registration </h1>
					<form onSubmit={this.submitRegistration}>
						{/* Name Input */}
						<p className="label"> Name </p>
						<input
							className="box-input"
							type="text"
							name="name"
							value={this.state.name}
							placeholder="Alfred Smith"
							onFocus={() => this.updateState({ nameError: "" })}
							onChange={(e) => this.updateState({ name: e.target.value })}
						/>
						<div id="error-box">{this.state.nameError}</div>

						{/* Email Input */}
						<p className="label"> Email </p>
						<input
							className="box-input"
							type="text"
							name="email"
							placeholder="user@example.com"
							value={this.state.email}
							onFocus={() => this.updateState({ emailError: "" })}
							onChange={(e) => this.updateState({ email: e.target.value })}
						/>
						<div id="error-box">{this.state.emailError}</div>

						{/* Password Input */}
						<p className="label"> Password </p>
						<input
							className="box-input"
							type="text"
							name="password"
							value={this.state.password}
							placeholder="Password"
							onFocus={() => this.updateState({ passwordError: "" })}
							onChange={(e) => this.updateState({ password: e.target.value })}
						/>
						<div id="error-box">{this.state.passwordError}</div>

						{/* Confirm Password Input */}
						<input
							className="box-input"
							type="password"
							name="password"
							placeholder="Confirm Password"
							value={this.state.confirmpasswordPassword}
							onFocus={() => this.updateState({ confirmpasswordError: "" })}
							onChange={(e) =>
								this.updateState({
									confirmpassword: e.target.value,
								})
							}
						/>
					</form>

					<Link to="/login" className="btn btn-link">
						<div>Login to an existing account</div>
					</Link>
				</div>
			);
		}
	}
}

export default UserRegistration;
