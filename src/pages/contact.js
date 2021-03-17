import React, { useState } from "react";
import { Grid, Typography, TextField, Grow } from "@material-ui/core";
import Send from "@material-ui/icons/Email";
import { Form } from "react-bootstrap";

import CustomButton from "../components/Button";
import Personaldata from "../utils/resumeData";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    mesagge: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value);
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      "send data..." + data.name + " " + data.email + "" + data.mesagge
    );
  };

  return (
    <>
      <Grow in timeout={1000}>
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

                <Form onSubmit={enviarDatos}>
                  <Grid item xs={12}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="name"
                          label="name"
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="email"
                          label="email"
                          type="email"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="mesagge"
                          label="message"
                          onChange={handleChange}
                          multiline
                          rows={4}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        {/* button here  */}
                        <CustomButton text="send it" icon={<Send />} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Grid container>
                <Grid item className="section_title mb_30">
                  <span></span>
                  <h6 className="section_text">contact Informaion</h6>
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
      </Grow>
    </>
  );
};

export default Contact;
