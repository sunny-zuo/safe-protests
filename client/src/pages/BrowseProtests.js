import React, { Component } from "react";
import ProtestCard from "../components/protestCard";
import "./css/Newsfeed.css";

class BrowseProtests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			protestData: "",
		};
	}

	componentDidMount() {
		fetch("http://localhost:8000/get_protests?page=1")
			.then((response) => response.json())
			.then((data) => this.setState({ protestData: data.data }));
	}

	render() {
		if (this.state.protestData === "") {
			return null;
		}

		const Cards = this.state.protestData.map((protest) => (
			<ProtestCard {...protest} />
		));
		return (
			<div className="newsfeed-body">
				<h1 className="title">Latest Updates on your Protests</h1>
				<div className="protestCards">{Cards}</div>
			</div>
		);
	}
}

export default BrowseProtests;
