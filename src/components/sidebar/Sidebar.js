import './style.css';
import Map from '../../components/map/Map';
import { useLoadScript } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {

// ------- LOAD MAP ACCESS & SETUP ---------
    const { isLoaded  } = useLoadScript({
      googleMapsApiKey: 'AIzaSyBugMXwDHrB8nyOp1ekm086PfCuWrQU2W0',
      libraries: ["places"]
    });

  return (
    <div>
      <div className='filter-container'>
        
      </div>
      <div className='map-container'>
        { !isLoaded ? <div>Loading...</div> 
              : <Map />
        }
      </div>
    </div>
  )
}

export default Sidebar