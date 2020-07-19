import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => <div className="backdrop" onClick={props.click} />; //pass backdrop click function to backdrop

export default Backdrop;
