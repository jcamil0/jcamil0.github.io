import React from "react";
import { Grid, Typography, Icon, Paper, Grow } from "@material-ui/core";
import { TimelineItem, TimelineContent, TimelineDot } from "@material-ui/lab";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../components/Timeline";
import { Work } from "@material-ui/icons";

import "../assets/styles/resume.css";
import Personaldata from "../utils/resumeData";

const Resume = () => {
  return (
    <section id="resume">
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">education</div>
        </div>
      </div>
    </div>

    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Work</span>
        </h1>
      </div>

      <div className="nine columns main-col">work</div>
    </div>

    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <p>skillmessage</p>

        <div className="bars">
          <ul className="skills">skills</ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Resume;
