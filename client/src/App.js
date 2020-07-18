import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
	state = {
		loggedIn: false,
		users: [],
	};

	setUser = (user) => {
		let user_pool = this.state.users.concat(user, ["bye"]);
		this.setState({ users: user_pool }, () =>
			console.log("UserPool: ", this.state.users)
		);
	};

	setLogin = (isLoggedIn) => {
		this.setState({ loggedIn: isLoggedIn });
		console.log(this.state.loggedIn);
	};

	render() {
		return (
			<div>
				<Routes
					loggedIn={this.state.loggedIn}
					setLogin={this.setLogin}
					users={this.state.users}
					setUser={this.setUser}
				/>
			</div>
		);
	}
}

export default App;
