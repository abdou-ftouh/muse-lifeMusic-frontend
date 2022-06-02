import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import Bands from "../bands/Bands";
import Events from "../events/Events";
// import { faH, faHeartCircleBolt, faHeartCircleExclamation, faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = ({ type, band }) => {
  const [likes, setLikes] = useState(100);
  
  function addLikes() {
    let count = likes + 1
    setLikes(count)
    console.log(likes)
  }

  useEffect(() => {

  }, [likes])

  switch (type) {
    case "band":
      return (
        < div className="displayCard bandCard">

          <div className="likes" onClick={addLikes}><FontAwesomeIcon icon={ faHeart }/> <h6>{likes}</h6></div>
          <Link to='/bands:id'>

              {/* <img src={band.images ? band.images[0] : '../../../public/images/band1.jpg'} 
                alt={band.name} 
              /> */}
              <div className="bandCardInfo">
                <h5>{band.name}</h5>
                {/* <div onClick={console.log('hello')}><FontAwesomeIcon icon={ faHeart } /></div> */}
                <span>{band.biography}</span>
                <div className="genres">
                  <ul>
                    {band?.genres?.map((genre, i) => (
                      <li key={i}>{genre}</li>
                    ))}
                  </ul>
                </div>
              </div>

          </Link>
        </div>
      );

      break;
    case "event":
      return (
           band.events?.map((event, i) => {

               return(
                 <Link to="/events/:id">
                    <div key={i} className="displayCard eventCard">
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
