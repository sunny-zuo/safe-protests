import React, { useState } from "react";
import Routes from "./Routes";

const App = () => {
	const [loggedIn, setLogin] = useState(false);
	const [users, setUser] = useState([]);

	return (
		<div>
			<Routes
				loggedIn={loggedIn}
				setLogin={setLogin}
				users={users}
				setUser={setUser}
			/>
		</div>
	);
};

export default App;
