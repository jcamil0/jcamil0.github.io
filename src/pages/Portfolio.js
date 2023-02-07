import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
} from "@mui/material";
import Personaldata from "../utils/resumeData";
import "../assets/styles/portfolio.css";


const Portfolio = () => {
  const [Tabvalue, setTabvalue] = useState("All");
  const [proyectDialog, setProyectDialog] = useState(false);
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          {/* title */}
          <h1>Check Out Some of My Works.</h1>

          {/* tabs */}
          <div>
            <Tabs
              value={Tabvalue}
              indicatorColor="primary"
              textColor="primary"
              className="customTabs"
              onChange={(event, Newvalue) => setTabvalue(Newvalue)}
            >
              <Tab
                label="All"
                value="All"
                className={
                  Tabvalue === "All"
                    ? "custonTab_item activate"
                    : "custonTab_item"
                }
              />
              {[...new Set(Personaldata.portfolio.map((item) => item.tag))].map(
                (tag) => (
                  <Tab
                    label={tag}
                    value={tag}
                    className={
                      Tabvalue === tag
                        ? "custonTab_item activate"
                        : "custonTab_item"
                    }
                    key={tag}
                  />
                )
              )}
            </Tabs>
          </div>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {Personaldata.portfolio.map((proyect) => (
                <>
                  {Tabvalue === proyect.tag || Tabvalue === "All" ? (
                    <Grid item xs={12} sm={6} md={4}>
                      <Grow in timeout={1000}>
                        <Card
                          className="customCard"
                          onClick={() => setProyectDialog(proyect)}
                        >
                          <CardActionArea>
                            <CardMedia
                              key={proyect.img}
                              className="customCard_image"
                              style={{ height: "140px" }}
                              component="img"
                              image={proyect.img}
                            />
                            <CardContent>
                              <Typography
                                key={proyect.title}
                                className="customCard_title"
                              >
                                {proyect.title}
                              </Typography>
                              <Typography
                                key={proyect.caption}
                                className="customCard_caption"
                                varinat="body2"
                              >
                                {proyect.caption}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </>
              ))}
            </Grid>
          </Grid>
          {/* modal screen */}
          <Dialog
            open={proyectDialog}
            onClose={() => setProyectDialog(false)}
            className="proyectDialog"
          >
            <DialogTitle onClose={() => setProyectDialog(false)}>
              <Typography>{proyectDialog.title}</Typography>
            </DialogTitle>
            <img src={proyectDialog.img} alt="" className="proyectDialog_img" />
            <DialogContent>
              <Typography className="proyectDialog_description">
                {proyectDialog.description}
              </Typography>
            </DialogContent>
            <DialogActions className="proyectDialog_actions">
     
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
