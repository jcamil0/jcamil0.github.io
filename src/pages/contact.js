import React from "react";
import { Grid, Typography, Icon ,TextField } from "@material-ui/core";

import Personaldata from '../utils/resumeData'
const contact = () => {
  return (
    <>
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
                  {Object.keys(Personaldata.social).map((key) => (
                    <Grid item>
                      <a href={Personaldata.social[key].link}>
                        {Personaldata.social[key].icon}
                      </a>
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

export default contact;
