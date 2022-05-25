import "./style.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Bands from "../bands/Bands";
import Events from "../events/Events";

const DisplayCard = ({ type, band }) => {
  switch (type) {
    case "band":
      return (
        <div className="displayCard bandCard">
          {/* <img src={band.images[0]} alt={band.name} /> */}
          <div className="bandCardInfo">
            <h5>{band.name}</h5>
          </div>
        </div>
      );

      break;
    case "event":
      return (
           band.events?.map((event) => {

               return(
                  <div className="displayCard eventCard">
                     {/* <img src={band.images[0]} alt={band.name} /> */}
                     <div className="eventCardInfo">
                     <h5>{band.name}</h5>
                     <h5>{event.startTime}</h5>
                     </div>
                  </div>
               )


         })
        );

    default:
      return;
  }
};

export default DisplayCard;
