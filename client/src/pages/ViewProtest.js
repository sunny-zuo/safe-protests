import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Map } from '@joeattardi/react-mapquest-static-map';
import queryString from 'query-string';
import PostCard from "../components/postCard";
import "./css/ViewProtest.css";
import leftarrow from "./img/left.png";
import { Link } from "react-router-dom";

class ViewProtest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            protestData: "",
            protestID: "",
            signedUp: false
        }

        this.signUp = this.signUp.bind(this);
    }

    componentDidMount() {
        const protestID = queryString.parse(this.props.location.search).protestID;

        if (protestID !== "") {
            fetch(`http://localhost:8000/get_protest?protestID=${protestID}`)
                .then(response => response.json())
                .then(data => this.setState({ protestData: data, protestID: protestID }));
        }
    }

    componentDidUpdate() {
        if (this.state.protestID !== "") {
            fetch(`http://localhost:8000/get_protest?protestID=${this.state.protestID}`)
                .then(response => response.json())
                .then(data => this.setState({ protestData: data, protestID: this.state.protestID }));
        }
    }

    signUp() {
        const reqBody = {
            'protestID': this.state.protestID,
            'username': 'anon'
        }
        fetch(`http://localhost:8000/join_protest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
        }).then(this.setState({ signedUp: true }));
    }

    render() {
        if (this.state.protestData === "") {
            return null;
        }
        const data = this.state.protestData;
        const Posts = data.posts.reverse().map(post => <PostCard {...post} />)
        let ProtestorList = "";
        for (let i = 0; i < Object.keys(data.protestors); i++) {
            ProtestorList += `${data.protestors[i]}, `;
        }
        // You can find all of the fields in the response in the README in the server folder
        return (
            <div className="protest-view">
                <Link to={{ pathname: "/browse-protests" }}>
                    <div className="backarrow-container">
                        <img className="img" src={leftarrow}></img>
                    </div>
                </Link>
                <div className="protest-info">
                    <h1 className="title" style={{ fontSize: "60px" }}>{data.name}</h1>
                    <h3>Description: {data.description}</h3>
                    <h2>Organized by: {data.organizer} | Signed up: {data.protestorCount}</h2>
                    <h2>{data.time} at {data.location}</h2>
                    <div className="mapImage">
                        <Map apiKey={process.env.REACT_APP_MAPQUEST_API_KEY} center={data.location} />
                    </div>
                    <p className="protestors">{ProtestorList}</p>
                </div>
                {this.state.signedUp ? <h3>You have successfully signed up!</h3> : <button onClick={this.signUp}>Sign Up</button>}
                <hr/>
                <div className="protest-posts">
                    <h2>Posts</h2>
                    <Link to={{ pathname: "/make-new-post", search: `?protestID=${data._id}` }}><button>Add New Post</button></Link>
                    {Posts}
                </div>
            </div>
        )
    }
}

export default withRouter(ViewProtest);