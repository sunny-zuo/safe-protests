import React from "react";
import { Link } from "react-router-dom";
import "./../pages/css/ProtestCard.css"

export default function ProtestCard(props) {
    return (
        <Link to={{ pathname: "/view-protest", state: { protestID: props._id }}}>
            <div className='protestCard'>
                <h1 className="cardtitle">{props.name}</h1>

                <div className="dateloc-container">
                    <h2>Date: {props.time}</h2>
                    <h2>Location: {props.location}</h2>
                </div>

                <div class="card-subinfo">
                    <h4>{props.description}</h4>
                    <h3>Organizers: {props.organizer}</h3>
                    <h3>Signed up: {props.protestorCount}</h3>
                    <h3>Status: ${props.status}</h3>
                </div>
            </div>
        </Link>
    )
}