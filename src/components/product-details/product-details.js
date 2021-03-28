import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProductCard from "../product-card/product-card";
import SRmap from "../map";
import React from "react";
import img from "../../images/img.png";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './product-details.css';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    grid:{
        maxHeight: "500px",
        width:"auto",
        overflow: "auto",
    },
    body :{
        height: '100%',
    },
    html :{
        height: '100%',
    },
    img: {
        margin: 'auto',
        display: 'inline-block',
        maxWidth: '97%',
        maxHeight: '100%',
        borderRadius: '5px',
    },
    p:{
      color: 'grey',
    },
    card :{
        maxHeight: "95%",
        width:"100%",
        overflow: "hidden",
    },
    ul:{
        listStyleType: "none",
    },
}));



export default function ProductDetails() {
    const classes = useStyles();
    return(


        <div className='popup'>
            <div className='popup_inner'>
                <>
                    <Card className={classes.card}>
                        <Grid container spacing={1} >
                            <Grid item md={6} className={classes.grid}>
                                <img src={img} className={classes.img}/>
                                <img src={img} className={classes.img}/>
                                <img src={img} className={classes.img}/>
                                <img src={img} className={classes.img}/>
                                <img src={img} className={classes.img}/>
                                <img src={img} className={classes.img}/>
                            </Grid>
                            <Grid item md={6} >
                                <ul className={classes.ul}>
                                    <li className="mt-3" >
                                        <Button variant="outlined" color="primary"><FavoriteBorderIcon/> Save</Button>
                                        <Button className="ml-2" variant="outlined" color="primary"><ShareIcon/> Share</Button>
                                        <Button className="ml-2" variant="outlined" color="primary"><MoreHorizIcon/> More</Button>
                                    </li>
                                </ul>
                                <hr className="new1"></hr>
                                <h1 id="price">$334100</h1>
                                <p className={classes.p}>4521 Cambridge, Boston, MA 02215</p>
                                <p>Self tour daily: 6am - 8pm</p>
                                <p>No appointment required</p>
                            </Grid>
                            {/* <Hidden mdDown>
                    <Grid item xs={6} >
                        <SRmap/>
                    </Grid>
                    </Hidden> */}
                        </Grid>
                        {/* </div> */}
                    </Card>
                </>
                <Link to={`/searchresults`}>
                    <p >close me</p>
                </Link>
            </div>
        </div>






    );
}