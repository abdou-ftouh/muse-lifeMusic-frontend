import './style.css';
import React from 'react';

import Bands from '../../components/bands/Bands';
import Events from '../../components/events/Events';
import Sidebar from '../../components/sidebar/Sidebar';
import Map from '../../components/map/Map';
import { useLoadScript } from '@react-google-maps/api';

const HomePage = () => {
// ------- LOAD MAP ACCESS & SETUP ---------
    // const { isLoaded  } = useLoadScript({
    //   googleMapsApiKey: 'AIzaSyBugMXwDHrB8nyOp1ekm086PfCuWrQU2W0',
    //   libraries: ["places"]
    // });




  return (


    <div className='main-container'>
          {/* { !isLoaded ? <div>Loading...</div> 
            : <Map />
          } */}

          <div className='side-container'>
            <Sidebar />
          </div>
          <div className='sub-container'>
            <div className='section sub-1'>
              <h3 className='section-title'>BANDS</h3>
              <Bands />
            </div>

            <div className='section sub-2'>
              <h3 className='section-title'>EVENTS</h3>
              <Events />
            </div>
          </div>
    </div>
  )
}

export default HomePage