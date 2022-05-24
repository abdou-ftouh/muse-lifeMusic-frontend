import './style.css';
import React from 'react';

import Bands from '../../components/bands/Bands';
import Events from '../../components/events/Events';
import Sidebar from '../../components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <div>
        <div>
            <Sidebar />
            <Bands />
            <Events />
        </div>
        
    </div>
  )
}

export default HomePage