import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../timeline/Timeline'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import GetApp from '@material-ui/icons/GetApp';
import TimelineItem from '@material-ui/lab/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './Profile.css'
import profileimg from '../../assets/img/cj_profile.jpg'
import Personaldata from '../../utils/resumeData'

import CustomButton from '../button/Button'

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
            {/*
            <figure>
                <img src={profileimg} alt='cv' />
            </figure> */}
            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />} >
                    <CustomTimelineItem title='Name' text={Personaldata.profile.firstname} />
                    <CustomTimelineItem title='Number' text={Personaldata.profile.photo} />
                    <CustomTimelineItem title='Email' text={Personaldata.profile.mail} />

                    {Object.keys(Personaldata.social).map(key => (
                        <CustomTimelineItem title={key} text={Personaldata.social[key].name}
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
