import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { getFullDate, getShortDate, getDate, getDay, getTime } from "../events/Events";

import { useDispatch, useSelector } from "react-redux";
import { updateBand } from "../bands/bandsSlice";


// import { faH, faHeartCircleBolt, faHeartCircleExclamation, faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";





const DisplayCard = ({ type, band, event }) => {
    const likeBand = useSelector(updateBand);
    const dispatch = useDispatch();


    const [likes, setLikes] = useState(0);
    
    function addLikes() {
        let count = likes + 1
        setLikes(count)
        console.log(count)
        console.log(band._id)
        dispatch(updateBand({ ...band, likes : count }))
        
    }
    

    useEffect(() => {

    }, [])
    
    switch (type) {
        case "band":
        return (
            < div className="displayCard bandCard">

                <div className="likes" onClick={addLikes}><FontAwesomeIcon icon={ faHeart }/> <h6>{band.likes}</h6></div>
                {/* <Link to='/bands:id'> */}
                    {/* <img src={band.images ? band.images[0] : band1} 
                        alt={band.name} 
                    /> */}
                    <section className="bandCardInfo">
                        <h1>{band.name}</h1>
                    </section>
                    <section className="genres-section">
                    {
                        band.genres?.map((genre, i) => (
                            <p key={i}>{genre}</p>
                        ))
                    }
                </section>
                {/* </Link> */}
            </div>
        );
        case "event":
    
        return (
            <div className="displayCard eventCard">
                
                <section className="event-time-section">
                    <h1 className="event-time">{ getShortDate(event.startTime) }</h1>
                    <h3 className="event-time">{getTime(event.startTime)} - {getTime(event.endTime)}</h3>
                    <h4>{event.location.name ? event.location.name : 'no address'}</h4>
                </section>
                <h3 className="event-band">{event.band.name}</h3>
                <section className="genres-section">
                    {
                        event.band.genres?.map((genre, i) => (
                            <p key={i}> {genre} | </p>
                        ))
                    }
                </section>
            </div>
        );

        default:
        return;
    }
};

export default DisplayCard;
