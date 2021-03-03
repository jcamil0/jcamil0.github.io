import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow } from "@material-ui/core";
import Personaldata from '../../utils/resumeData'
const Portfolio = () => {
    const [Tabvalue, setTabvalue] = useState("All");
    const [proyectDialog, setProyectDialog] = useState(false);

    return (
        <Grid container className="section pd_45 pt_45">
            {/* title */}
            <Grid item className="section_title">
                <span></span>
                <h6 className="section_text">portfolio</h6>
            </Grid>
            {/* tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={Tabvalue}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, Newvalue) => setTabvalue(Newvalue)}>
                    <Tab label='All' value='All' className={Tabvalue == 'All' ? 'custonTab_item activate' : 'custonTab_item'} />

                    {[...new Set(Personaldata.portfolio.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={Tabvalue == 'All' ? 'custonTab_item activate' : 'custonTab_item'} />
                    ))}
                </Tabs>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={2} >
                    {Personaldata.portfolio.map((proyect) => (
                        <>
                            {Tabvalue == proyect.tag || Tabvalue == 'All' ? (<Grid item >
                                <Grow in timeout={1000}>
                                    <Card className='customCard' onClick={() => setProyectDialog(proyect)}>
                                        <CardActionArea>
                                            <CardMedia classNane='customCard_image' image={proyect.img} title={proyect.title} />
                                            <CardContent>
                                                <Typography className='customCard_title'>{proyect.title}</Typography>
                                                <Typography varinat='body2' className='customCard_description'>{proyect.description}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                            </Grid>) : null}

                        </>
                    ))}
                </Grid>
            </Grid>
            {/* modal screen */}
            <Dialog open={proyectDialog} onClose={() => setProyectDialog(false)}>
                <DialogTitle onClose={() => setProyectDialog(false)} >{proyectDialog.title}</DialogTitle >
                <img src="" alt="" />
                <DialogContent>
                    <Typography>{proyectDialog.description}</Typography>
                </DialogContent>
                <DialogActions>
                    {proyectDialog?.links?.map(link => (
                        <a href={link.link} target='_blank' >{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Portfolio;
