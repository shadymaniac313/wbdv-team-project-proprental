import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../index.css';
import Hidden from '@material-ui/core/Hidden';

// import { MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SRmap from './map';
import Container from '@material-ui/core/Container';
import SearchAppBar from './search-bar.component';

import { IconButton, Typography, Button, AppBar, Toolbar } from "@material-ui/core";


import ProductCard from './product-card/product-card';
import 'leaflet/dist/leaflet.css';


const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        height:"100%"
    },
    paper2: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    grid:{
        height: '100%',
    },
    body :{
        height: '100%',
    },
    html :{
        height: '100%',
    }
}));

const names = ['James', 'Paul', 'John', 'George', 'Ringo', 'James', 'Paul', 'John', 'George', 'Ringo'];


export default function ProductVisibility(){
    const classes = useStyles();
    var [spopup, setshowPopup] = useState(0);

    const togglePopup= () => {
        setshowPopup(!spopup);
    }

    return (
        <div>
            <SearchAppBar />
            <main className={classes.paper2}>
            {/* <div className={classes.root}> */}

                <Grid container spacing={1}>
                    <Grid item md={6}>
                        {names.map((name, index) => (
                            <ProductCard
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                                location="Private room in center of London"
                                title="Stay at this spacious Edwardian House"
                                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                                star={4.73}
                                price="£30 / night"
                                total="£117 total"
                                onClick={spopup}
                            />
                        ))}
                    </Grid>
                    <Grid item md={6} >
                        <SRmap/>
                    </Grid>
                    {/* <Hidden mdDown>
                    <Grid item xs={6} >
                        <SRmap/>
                    </Grid>
                    </Hidden> */}
                </Grid>
            {/* </div> */}
            </main>
        </div>
    );
}

