import React, { useState } from "react";
import Routes from "./Routes";


const App = () => {
	const [loggedIn, setLogin] = useState(true);
	const [users, setUser] = useState([]);

	return (
		<div>
			<Routes loggedIn={loggedIn} setLogin={setLogin} users={users} />
		</div>
	);
};

export default App;
