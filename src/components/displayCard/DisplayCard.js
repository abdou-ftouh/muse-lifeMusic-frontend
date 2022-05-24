import "./style.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Bands from "../bands/Bands";
import Events from "../events/Events";

const DisplayCard = ({ type, band, event }) => {

 switch (type) {
  //  case "band":
  //     return <h6>band</h6>
 
   case "event":
      return <h3>event</h3>
 
   default:
    return
 }
  
}

export default DisplayCard;
