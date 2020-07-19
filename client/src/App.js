import React, { Component } from "react";
import Routes from "./Routes";
import MainNav from "./pages/Navbar/MainNav";

class App extends Component {
	state = {
		loggedIn: true,
		users: [],
	};

	logOut = () => {
		this.setState({ loggedIn: false }, () =>
			console.log("Logged In:", this.state.loggedIn)
		);
	};

	setUser = (user) => {
		let user_pool = this.state.users.concat(user);
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
				<MainNav loggedIn={this.state.loggedIn} logOut={this.logOut} />
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
