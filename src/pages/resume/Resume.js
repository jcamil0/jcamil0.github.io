import React from "react";
import { Grid, Typography, Icon, TextField } from "@material-ui/core";
import CustomTimeline, {
    CustomTimelineSeparator,
} from "../../components/Timeline";
import Paper from "@material-ui/core/Paper";

import { Work } from "@material-ui/icons";
import "../../assets/styles/resume.css";
import Personaldata from "../../utils/resumeData";
import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";

const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className="section pd_45 pt_45">
                <Grid item className="section_title">
                    <span></span>
                    <h6 className="section_text">about me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{Personaldata.profile.summary}</Typography>
                </Grid>
            </Grid>

            {/* resume title */}
            <Grid container className="section pd_45">
                <Grid item className="section_title  mb_30">
                    <span></span>
                    <h6 className="section_text">resume</h6>
                </Grid>
                {/* resume container */}
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="exeriences" icon={<Work />}>
                                {Personaldata.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography>{experience.title}</Typography>
                                            <Typography variant="caption">
                                                {experience.period}
                                            </Typography>
                                            <Typography variant="body2">
                                                {experience.company}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* education  */}

                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="educacion mb_30" icon={<Work />}>
                                {Personaldata.educations.map((education) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography>{education.title}</Typography>
                                            <Typography variant="caption">
                                                {education.city}
                                            </Typography>
                                            <Typography variant="body2">
                                                {education.degree}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* services  */}
            <Grid container className="section pd_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_text">Services</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-around">
                        {Personaldata.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="services">
                                    <Icon className="services_icon">{service.icon}</Icon>
                                    <Typography className="services_title" variant="h6">
                                        {service.title}
                                    </Typography>
                                    <Typography className="service_description" variant="body2">
                                        {service.description}
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* skills */}
            <Grid container className="section graybg pd_45">
                <Grid item xs={12}>
                    <Grid container spacing={2} justify="space-between">
                        {Personaldata.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevator={0} className="skill">
                                    <Typography variant="h6" className="skill_tile">
                                        {skill.name}
                                    </Typography>
                                    {skill.description.map((elements) => (
                                        <Typography variant="body2" className="skill_description">
                                            <TimelineDot
                                                variant="outlined"
                                                className="timeline_dot"
                                            />
                                            {elements}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* contac */}
            <Grid container className="section pt_45 pd_45 ">
                {/* contact form */}
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={7}>
                        <Grid container>
                            <Grid item className="section_title mb_30">
                                <span></span>
                                <h6 className="section_text">contact form </h6>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth name="name" label="name" />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth name="email" label="email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            name="mesage"
                                            label="message"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        {/* button here  */}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <Grid container>
                            <Grid item className="section_title mb_30">
                                <span></span>
                                <h6 className="section_text">contact Informaion </h6>
                            </Grid>

                            <Grid item xs={12}>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <span>
                                                {Personaldata.profile.firstname}{" "}
                                                {Personaldata.profile.lastname}
                                            </span>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            <span>{Personaldata.profile.title}</span>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            <span>{Personaldata.profile.city}</span>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            <span>{Personaldata.profile.phone}</span>
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    {Object.keys(Personaldata.social).map(key=>(
                                        <Grid item >
                                            <a href={Personaldata.social[key].link}>{Personaldata.social[key].icon}</a>
                                        </Grid>
                                    ))}
                                </Grid>

                            </Grid>

                    </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Resume;
