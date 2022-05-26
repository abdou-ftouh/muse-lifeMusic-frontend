import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Bands from "../bands/Bands";
import Events from "../events/Events";
// import { faH, faHeartCircleBolt, faHeartCircleExclamation, faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = ({ type, band }) => {

  switch (type) {
    case "band":
      return (
        <div className="displayCard bandCard">
          <FontAwesomeIcon icon={ faHeart } ></FontAwesomeIcon>
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
