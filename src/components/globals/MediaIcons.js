import React from 'react'
import { Link } from 'react-router-dom';

const MediaIcons = ({ mediaLinks }) => {
  return (
    <div className='mediaIconsContain iconsContainer'>
        {
            mediaLinks?.map((link) => {
                if(link.facebook) {
                    <div className='mediaIcon'>
                        <Link to={link.facebook}>
                            <img src="" alt="facebook icon"/>
                        </Link>
                    </div>
                }
                if(link.instagram) {
                    <div className='mediaIcon'>
                        <Link to={link.instagram}>
                            <img src="" alt="instagram icon"/>
                        </Link>
                    </div>
                }
                if(link.spotify) {
                    <div className='mediaIcon'>
                        <Link to={link.spotify}>
                            <img src="" alt="spotify icon"/>
                        </Link>
                    </div>
                }
                if(link.tiktok) {
                    <div className='mediaIcon'>
                        <Link to={link.tiktok}>
                            <img src="" alt="tiktok icon"/>
                        </Link>
                    </div>
                }
                if(link.twitter) {
                    <div className='mediaIcon'>
                        <Link to={link.twitter}>
                            <img src="" alt="twitter icon"/>
                        </Link>
                    </div>
                }
                if(link.youtube) {
                    <div className='mediaIcon'>
                        <Link to={link.youtube}>
                            <img src="" alt="twitter icon"/>
                        </Link>
                    </div>
                }
            })
        }
    </div>
  )
}

export default MediaIcons