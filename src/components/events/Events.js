import { bands } from '../../seeds';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DisplayCard from '../displayCard/DisplayCard';

// console.log(bands[0].events)

const Events = () => {


  const allEvents = [];
  bands.forEach((band) => {
    band.events.map((event) => {
      allEvents.push(event)
    })
  })

  // console.log(allEvents)


  return (
    <div className='eventsContainer'>

      {bands?.forEach((band) => {
        console.log(band)
        band.events?.map((event, i) => {
        // allEvents?.map((event, i) => (
          console.log(event);
          <DisplayCard key={i} type="event" event={event} />
        })
      })}
     
    </div>
  )
}

export default Events