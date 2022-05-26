import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='site-info header-content'>
        <h3>MUSE - find local live music</h3>
      </div>

      <div className='user-side header-content'>
        <div className='user'>
          <div className='user-avatar'><h4>M</h4></div>
          <h3 className='user-name'>User Info</h3>
        </div>
        <div className='sign-in'>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <h3>
            Sign-in/out
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header