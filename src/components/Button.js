import React from "react";
import { Button } from "@material-ui/core";
import "../assets/styles/button.css";
const CustomButton = ({ text, icon, _onpress }) => {
  return (
    <Button
      className="custon_btn"
      type="submit"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
