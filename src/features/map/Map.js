import './style.css';
import React, { useState, useMemo, useCallback, useRef } from 'react'
import { useLoadScript, GoogleMap, Marker, MarkerClusterer, DirectionsRenderer } from '@react-google-maps/api';

    // const { isLoaded  } = useLoadScript({
    //   googleMapsApiKey: 'AIzaSyBugMXwDHrB8nyOp1ekm086PfCuWrQU2W0',
    //   googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    //   libraries: ["places"]
    // });


const Map = () => {
    const mapRef = useRef(GoogleMap)
    const center = useMemo(() => ({lat: 44, lng: -80}), []);
    const onLoad = useCallback(map => (mapRef.current = map), []);

    // const options = useMemo(() => (
    //     {
    //         disableDefaultUI: true,
    //         clickableIcons: false,
    //     }, []
    // ))
    const options = {
            disableDefaultUI: true,
            clickableIcons: false,
        }


    
    return (
          
        <GoogleMap 
            zoom={10} 
            center={center} 
            mapContainerStyle={{width: '100%', height: '100%', marginBottom: "0", position: "absolute"}} 
            options={{options}}
            onLoad={onLoad}
        >
            <Marker position={{lat: 44, lng: -80}} />
        </GoogleMap>


    )

}

export default Map



// export default function GooMap () {
//     const { isLoaded  } = useLoadScript({
//         googleMapsApiKey: 'AIzaSyBugMXwDHrB8nyOp1ekm086PfCuWrQU2W0',
//     });

//     if(!isLoaded) return <div>Loading...</div>;
//     return <Map />
// }

// function Map() {

//     const center = useMemo(() => ({lat: 44, lng: -80}), []);


//     return <GoogleMap zoom={10} center={center} mapContainerStyle={{width: '100%', height: '100vh'}} >
//         <Marker position={{lat: 44, lng: -80}} />
//     </GoogleMap>
// }
