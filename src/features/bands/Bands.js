import "./style.css";
// import { bands } from "../../seeds";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import DisplayCard from "../displayCard/DisplayCard";

const Bands = () => {
    const [bands, setBands] = useState([]);

    useEffect(() => {
        getBands()
    }, [])

  // const bands = useSelector(state => state.bands);

    async function getBands() {
      try {
            const url = "http://localhost:4000/bands";
            await axios.get(url)
                .then((res) => {
                    console.log(res.data)
                    setBands(res.data)
                })
    } catch (error) {
    console.error(error);
        }
  };

//   const bandsList = bands?.map((band, i) => (
//     <DisplayCard key={band._id} type="band" band={band} />
//   ));

  console.log(bands)

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
