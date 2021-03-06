import React from 'react'
import { Typography } from '@material-ui/core'

import { PersonOutlineOutlined, GetApp } from '@material-ui/icons';
import { TimelineContent, TimelineItem } from '@material-ui/lab';

import CustomTimeline, { CustomTimelineSeparator } from '../components/Timeline'
import profileimg from '../assets/img/cj_profile.jpg'
import Personaldata from '../utils/resumeData'
import CustomButton from '../components/Button'

import '../assets/styles/Profile.css'

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>
            {link ? (
                <Typography className='timelineIten_text'>
                    <span>{title}:</span>{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {text}
                    </a>
                </Typography>) : (
                    <Typography className='timelineIten_text' ><span>{title}:</span>{text}</Typography>
                )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className="profile_name">
                <Typography className="name">{Personaldata.profile.firstname} {Personaldata.profile.lastname}</Typography>
                <Typography className="title">{Personaldata.profile.title}</Typography>
            </div>

            <div className="profile_image">
                <img src={profileimg} alt={Personaldata.profile.firstname} />
            </div>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlined />} >
                    <CustomTimelineItem title='Name' text={Personaldata.profile.firstname} />
                    <CustomTimelineItem title='Number' text={Personaldata.profile.phone} />
                    <CustomTimelineItem title='Email' text={Personaldata.profile.mail} />

                    {Object.keys(Personaldata.social).map((key) => (
                        <CustomTimelineItem key={key} title={Personaldata.social[key].name} text={Personaldata.social[key].link}
                            link={Personaldata.social[key].link}
                        />))}
                </CustomTimeline>
                <div className="button_container">
                    <CustomButton text={"Download Cv"} icon={<GetApp />} />
                </div>
            </div>
        </div>
    )
}

export default Profile
