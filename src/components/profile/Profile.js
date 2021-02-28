import React from 'react'
import { Typography } from '@material-ui/core'

import './Profile.css'
import profileimg from '../../assets/img/cj_profile.jpg'
import Timeline from '../../components/timeline/Timeline'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className="profile_name">
                <Typography className="name">camilo</Typography>
                <Typography className="title">ll</Typography>
            </div>

            <div className="profile_image">
                <img src={profileimg} alt='cv' />
            </div>
            {/*
            <figure>
                <img src={profileimg} alt='cv' />
            </figure> */}
            <div className="profile_information">
                <Timeline />
                <br />
                <h2>akjskajkj</h2>
                <button> press me </button>
            </div>
        </div>
    )
}

export default Profile
