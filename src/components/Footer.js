import React from 'react'
import { Typography } from '@material-ui/core'
import Personaldata from '../utils/resumeData'
import '../assets/styles/footer.css'
const Foorter = () => {
    return (
        <div className='footer'>
            <div className="footer_left">
                <Typography className='footer_text'>
                    {Personaldata.profile.firstname} {Personaldata.profile.lastname}
                </Typography>
            </div>
            <div className="footer_right">
                <Typography className='footer_copyright'>
                    Devolepment and desing{" "}
                    <a href="https://github.com/jcamil0">
                        {Personaldata.profile.firstname} {Personaldata.profile.lastname}
                    </a>
                </Typography>
            </div>
        </div>
    )
}

export default Foorter
