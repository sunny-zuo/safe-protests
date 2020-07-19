import React, { Component } from "react";
import "./pages/css/Toolbar.css";

class Text extends Component {
	state = {
		text: {
			recipient: "5878901255",
			textmessage: "test message",
		},
	};

	sendText = (_) => {
		const { text } = this.state;
		//pass variables within query string
		fetch(
			`http://localhost:8000/send_text?recipient=${text.recipient}&textmessage=${text.textmessage}`
		).catch((err) => console.log(err));
	};

	render() {
		return (
			<div class="send-text">
				<button class="txting-btn" onClick={this.sendText}> HELP </button>
			</div>
		);
	}
}

export default Text;
