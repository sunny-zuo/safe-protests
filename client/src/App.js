import React, { useState } from "react";
import Routes from "./Routes";

import Toolbar from './pages/components/Toolbar/Toolbar';

const App = () => {
	const [loggedIn, setLogin] = useState(true);
	const [users, setUser] = useState([]);

	return (
		<div style={{paddingTop: '25px'}}>
			<Toolbar></Toolbar>
			<Routes loggedIn={loggedIn} setLogin={setLogin} users={users} />
		</div>
	);
};

export default App;
