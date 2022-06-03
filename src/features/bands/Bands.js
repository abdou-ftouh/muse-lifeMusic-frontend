import "./style.css";
// import { bands } from "../../seeds";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { allBands, getBandsError, getBandsStatus, getBands } from "./bandsSlice";

import DisplayCard from "../displayCard/DisplayCard";



const Bands = () => {
    const dispatch = useDispatch();

    const bands = useSelector(allBands);
    console.log(bands)
    const bandsStatus = useSelector(getBandsStatus);
    const error = useSelector(getBandsError);

    useEffect(() => {
        if (bandsStatus === 'idle') {
            dispatch(getBands())
        }
    }, [])

    return (
        <div className="bandsContainer">
            {
                bands
                ? (
                    bands?.map((band, i) => (
                    <DisplayCard key={band._id} type="band" band={band} />
                    ))
                ) : <h1>Loading Bands....</h1>

            }
        </div>
    )
};

export default Bands;
