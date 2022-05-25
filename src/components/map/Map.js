import './style.css';
import React, { useState, useMemo, useCallback, useRef } from 'react'
import { useLoadScript, GoogleMap, Marker, MarkerClusterer, DirectionsRenderer } from '@react-google-maps/api';



const Map = () => {
    const mapRef = useRef(GoogleMap)
    const center = useMemo(() => ({lat: 44, lng: -80}), []);
    const onLoad = useCallback(map => (mapRef.current = map), []);

    const options = useMemo(() => (
        {
            disableDefaultUI: true,
            clickableIcons: false,
        }, []
    ))

    return (

            <div className='mapContainer'>
                <div className='mapControls'>
                    <h1>Commute?</h1>
                </div>

                <h1>Map</h1>
                <GoogleMap 
                    zoom={10} 
                    center={center} 
                    mapContainerStyle={{width: '100%', height: '50%', marginBottom: "0", position: 'absolute',}} 
                    options={options}
                    onLoad={onLoad}
                >
                    <Marker position={{lat: 44, lng: -80}} />
                </GoogleMap>
            </div>

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
