import React from "react";
import "./../pages/css/PostCard.css"

export default function PostCard(props) {
    return (
        <div className='postCard'>
            <h1 className="cardtitle">{props.title}</h1>
            <p className="cardmsg">{props.body}</p>
            <h4>Sent by {props.username} on {new Date(props.date).toString()}</h4>
        </div>
    )
}