import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Bands from "../bands/Bands";
import Events from "../events/Events";
// import { faH, faHeartCircleBolt, faHeartCircleExclamation, faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = ({ type, band }) => {

  switch (type) {
    case "band":
      return (
        < div className="displayCard bandCard">
          <FontAwesomeIcon icon={ faHeart } onClick={() => console.log(`hello ${band.name}`)} />
          <Link to='/bands:id'>

              {/* <img src={band.images ? band.images[0] : '../../../public/images/band1.jpg'} 
                alt={band.name} 
              /> */}
              <div className="bandCardInfo">
                <h5>{band.name}</h5>
                {/* <div onClick={console.log('hello')}><FontAwesomeIcon icon={ faHeart } /></div> */}
                <span>{band.biography}</span>
              </div>

          </Link>
        </div>
      );

      break;
    case "event":
      return (
           band.events?.map((event) => {

               return(
                 <Link to="/events/:id">
                    <div className="displayCard eventCard">
                        {/* <img src={band.images[0]} alt={band.name} /> */}
                        <div className="eventCardInfo">
                        <h5>{band.name}</h5>
                        <h5>{event.startTime}</h5>
                        </div>
                    </div>
                 </Link>
               )


         })
        );

    default:
      return;
  }
};

export default DisplayCard;
