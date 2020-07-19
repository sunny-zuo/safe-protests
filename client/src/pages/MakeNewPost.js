import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class MakeNewPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			username: ""
		}
		this.addPost = this.addPost.bind(this);
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

	addPost() {
		let reqBody = {
			username: this.state.username,
			protestID: queryString.parse(this.props.location.search).protestID,
			title: this.state.title,
			body: this.state.body
		};
		fetch("http://localhost:8000/add_post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		}).then(() => {
			this.props.history.push(`/view-protest?protestID=${reqBody.protestID}`);
		});	
	}

	render() {
		return (
			<div className="body">
				<div className="text">
					<h1 className="title">
						Post an Update
				</h1>

					<input type="text" id="post-title" className="input-field" name="post-title" placeholder="Title Your Post (optional)" value={this.state.title} onChange={(e) => this.updateState({ title: e.target.value })}></input>
					<input type="text" id="post-username" className="input-field" name="post-username" placeholder="Name" value={this.state.username} onChange={(e) => this.updateState({ username: e.target.value })}></input>
					<input type="textarea" rows="10" style={{ height: "200px" }} id="post-cont" className="input-field" name="post-cont" placeholder="Post Content (required)" value={this.state.body} onChange={(e) => this.updateState({ body: e.target.value })}></input>

					
					<button className="main-btn" onClick={this.addPost}>Make Post</button>
				</div>
			</div>
		);
	}
}

export default withRouter(MakeNewPost);