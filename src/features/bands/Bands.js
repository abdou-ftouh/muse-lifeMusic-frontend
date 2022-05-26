import './style.css';
import { bands } from '../../seeds';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DisplayCard from '../displayCard/DisplayCard';

const Bands = () => {
  // const bands = useSelector(state => state.bands);

  // const bandsList = bands?.map((band, i) => (
  //   <DisplayCard key={i} type="band" band={band} />
  // ))

  // console.log(bands)
  return (
    <div className='bandsContainer'>
      {/* {bandsList} */}
      {bands?.map((band, i) => (
    <DisplayCard key={i} type="band" band={band} />
  ))}
    </div>
  )
}

export default Bands