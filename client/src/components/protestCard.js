import React from "react";

export default function ProtestCard(props) {
    return (
        <div className='protestCard'>
            <h1>{props.name}</h1>
            <h2>{props.time}</h2>
            <h2>{props.location}</h2>
            <h2>{props.description}</h2>
            <h3>Organizer: {props.organizer}</h3>
            <h4>Signed up: {props.protestorCount}</h4>
            <h4>Status: ${props.status}</h4>
        </div>
    )
}