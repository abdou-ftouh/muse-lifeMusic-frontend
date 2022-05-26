import './style.css';
import { bands } from '../../seeds';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DisplayCard from '../displayCard/DisplayCard';


const Events = () => {

  return (
    <div className='eventsContainer'>
       {bands?.map((band, i) => (
        <DisplayCard key={i} type="event" band={band} />
      ))}
    </div>
  )
}

export default Events