import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import Personaldata from '../../utils/resumeData'
const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className='section'>
                <Grid item className='section_title' >
                    <span></span>
                    <h6 className='section_text'>about me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{Personaldata.profile.summary}</Typography>
                </Grid>
            </Grid>
            {/* education and experiences */}
            <Grid container className='section'>

            </Grid>
            {/* services  */}
            <Grid container className='section'>

            </Grid>

            {/* skills */}
            <Grid container className='section'>

            </Grid>

            {/* contac */}
            <Grid container className='section'>

            </Grid>


        </>
    )
}

export default Resume
