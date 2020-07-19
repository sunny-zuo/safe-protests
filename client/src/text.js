import React, { Component } from "react";
import "./pages/css/Toolbar.css";

class Text extends Component {
	state = {
		text: {
			recipient: "6475309552",
			textmessage: "I need help, please",
		},
	};

	sendText = (_) => {
		const { text } = this.state;
		//pass variables within query string
		fetch(
			`http://localhost:8000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
		).catch((err) => console.log(err));
	};

	render() {
		return (
			<div class="send-text">
				<button class="txting-btn" onClick={this.sendText}> Send Text </button>
			</div>
		);
	}
}

export default Text;
