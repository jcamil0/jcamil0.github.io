import React from 'react'
import { Button } from '@material-ui/core'
import './button.css'
const CustomButton = ({ text, icon }) => {
    return (
        <Button className='custon_btn' endIcon={icon ? (<div className='btn_icon_container'>{icon}</div>) : null}>
            <span className='btn_text'>{text}</span>
        </Button>
    )
}

export default CustomButton
