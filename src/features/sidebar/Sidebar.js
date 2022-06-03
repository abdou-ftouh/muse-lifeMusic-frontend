import './style.css';
import Map from '../map/Map';
import { useLoadScript } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [bands, setBands] = useState([]);
    const [allbands,setallbands]=useState([])
// ------- LOAD MAP ACCESS & SETUP ---------



    const { isLoaded  } = useLoadScript({
      googleMapsApiKey: 'AIzaSyBugMXwDHrB8nyOp1ekm086PfCuWrQU2W0',
      // googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
      libraries: ["places"]
    });

    const filtreCards=event=>{
      const value=event.target.value.toLowerCase();
      const filtrebands=allbands.filter(
        bands=>(`${bands.name}`.toLowerCase().includes(value))
      )
      setBands(filtrebands)
    }


  return (
    <div className='sidebar'>
      <div className='filter-container'>
        <h3>FILTERS</h3>
        
        <input className='search-box' placeholder='Search...'  onInput={filtreCards}/>

      </div>
      <div className='map-container'>
        {/* <h3 style={{postions: "absolute"}}>Map</h3> */}
        { !isLoaded ? <div>Loading Map...</div> 
              : <Map />
        }
      </div>
    </div>
  )
}

export default Sidebar