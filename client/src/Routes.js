import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Main from "./pages/Main";
import UserRegistration from "./pages/UserRegistration";
import AboutSafeProjects from "./pages/AboutSafeProjects";
import BrowseProtests from "./pages/BrowseProtests";
import YourRights from "./pages/YourRights";
import TermsOfService from "./pages/TermsOfService";
import AddProtest from "./pages/AddProtest";

const Routes = ({ loggedIn, setLogin, users }) => {
	return (
		<main>
			<Switch>
				{/* Default Page */}
				<Route exact path="/" component={Main} />
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/registration">
					<UserRegistration users={users} />
				</Route>
				<PrivateRoute path="/about-safe-projects" loggedIn={loggedIn}>
					<AboutSafeProjects />
				</PrivateRoute>
				<PrivateRoute path="/add-protest" loggedIn={loggedIn}>
					<AddProtest />
				</PrivateRoute>
				<PrivateRoute path="/browse-protests" loggedIn={loggedIn}>
					<BrowseProtests />
				</PrivateRoute>
				<PrivateRoute path="/your-rights" loggedIn={loggedIn}>
					<YourRights />
				</PrivateRoute>
				<PrivateRoute path="/terms-of-service" loggedIn={loggedIn}>
					<TermsOfService />
				</PrivateRoute>
			</Switch>
		</main>
	);
};

export default Routes;
