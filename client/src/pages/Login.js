import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./css/form.scss";

class Login extends Component {
	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
			email: "",
			password: "",
			// Error messages
			emailError: "",
			passwordError: "",
			error: "",
		};
	}

	// validate function checks to make sure that user has entered submittable information
	validate = () => {
		let emailError = "";
		let passwordError = "";
		let errorExists = 0;

		// if email input is left blank
		if (!this.state.email) {
			emailError = "This field cannot be blank";
			errorExists = 1;
		} // if email does not match email protocol
		else if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			emailError = "Invalid email";
			errorExists = 1;
		} // if no email is entered
		if (!this.state.password) {
			passwordError = "This field cannot be blank";
			errorExists = 1;
		}
		// update state with error messages, if none update with empty strings
		this.updateState({ emailError: emailError, passwordError: passwordError });
		if (errorExists) {
			return false;
		}
		return true;
	};

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	updateState(args) {
		// make sure component is mounted, if so update state
		this._isMounted && this.setState(args);
	}

	// Submit login executes when the form is submitted
	submitLogin = async (e) => {
		e.preventDefault();
		let valid = this.validate();
		const checkCredentials = (obj) =>
			obj.email === this.state.email && obj.password === this.state.password;
		let inArray = this.props.users.some(checkCredentials);
		if (valid) {
			this.props.setLogin(true);
			console.log("Authenticated?: ", inArray);
		} else {
			this.updateState({
				error: "Incorrect Email or Password, please try again",
			});
		}
	};

	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/" />;
		} else {
			return (
				<div className="box">
					<h1 className="head"> Login </h1>
					<form onSubmit={this.submitLogin}>
						{/* Email Input */}
						<p className="label"> Email </p>
						<input
							className="box-input"
							id="email"
							type="text"
							name="email"
							placeholder="user@example.com"
							value={this.state.email}
							onFocus={() => this.updateState({ emailError: "" })}
							onChange={(e) => {
								this.updateState({ email: e.target.value });
							}}
						/>
						<div className="error-box">{this.state.emailError}</div>

						{/* Password Input */}
						<p className="label"> Password </p>
						<input
							className="box-input"
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onFocus={() => this.updateState({ passwordError: "" })}
							onChange={(e) => {
								this.updateState({ password: e.target.value });
							}}
						/>
						<div className="error-box">{this.state.passwordError}</div>

						<div className="btn-container">
							<input className="btn login-btn" type="submit" value="Login" />
						</div>

						<div className="error-box">{this.state.error}</div>
					</form>
					<br />
					<br />
					<br />
					{/* If user has not yet made an account display registration link */}
					<Link to="/registration" className="btn btn-link">
						<div>Create Account</div>
					</Link>
				</div>
			);
		}
	}
}

export default Login;
