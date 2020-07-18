import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class PrivateRoute extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { children, loggedIn, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={({ location }) =>
					loggedIn ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location },
							}}
						/>
					)
				}
			/>
		);
	}
}

export default PrivateRoute;
