import React from 'react'
import {Timeline,TimelineDot,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent } from '@material-ui/lab'
import { Typography } from '@material-ui/core'

import '../assets/styles/Timeline.css'

const CustomTimeline = ({ title, icon, children }) => {
    return (
        <Timeline className={'timeline'}>
            {/* header item */}
            <TimelineItem className={'timeline_fistItem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'} >
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    <Typography variant='h6' className={'timeline_header'}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
        </Timeline>
    )
}
export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot'} />
        <TimelineConnector />
    </TimelineSeparator>
)


export default CustomTimeline;