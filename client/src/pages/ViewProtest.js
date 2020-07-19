import React, { Component } from "react";

class ViewProtest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            protestData: ""
        }
    }

    componentDidMount() {
        fetch(`http:localhost:8000/get_protest?protestID=${this.props._id}`)
            .then(response => response.json())
            .then(data => this.setState({ protestData: data}))
    }

    render() {
        if (this.state.protestData === "") {
            return null;
        }

        const data = this.state.protestData;
        // You can find all of the fields in the response in the README in the server folder
        return (
            <div className="protest-view">
                <h1>{data.name}</h1>
                <h2>{data.organizer}</h2>
                <h2>{data.date} at {data.location}</h2>
                <h3>{data.description}</h3>
                
            </div>
        )
    }
}