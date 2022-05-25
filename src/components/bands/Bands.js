import { bands } from '../../seeds';
import './style.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DisplayCard from '../displayCard/DisplayCard';


const Bands = () => {

  // console.log(bands)
  return (
    <div className='bandsContainer'>
      {
        bands?.map((band, i) => (
          <DisplayCard key={i} type="band" band={band} />
        ))
      }
    </div>
  )
}

export default Bands