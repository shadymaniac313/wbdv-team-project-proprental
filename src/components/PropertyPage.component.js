import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchAppBar from './search-bar.component';
import FooterComponent from "./footer.component";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';


const useStyles = makeStyles((theme) => ({
    propertypage: {
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
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const items = [
    {
      src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
      caption: 'Titanic'
    },
    {
      src: 'https://www.prescottpark.org/uploads/2019/06/f00bf346385235.58520f9022451-1020x1020.jpg',
      caption: 'Jurassic Park'
    },
    {
      src: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
      caption: 'Avatar'
    }
];
  

export default function PropertyPage() {

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem key={item.src} >
             <img src={item.src}  style={{width:"100%", height:"50vh"}}/>
        <CarouselCaption  captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    const classes = useStyles();

    return (
        <div>
        <Container component="main">
        <SearchAppBar />
        <CssBaseline />
            <div className={classes.propertypage}>

            {/* Grid Start For Property Page  */}
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Typography variant="h3" gutterBottom>
                        Property Name
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
                        {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Grid>
            
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" gutterBottom>
                        Address One :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                        1185 Boylston Street
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                         Address Two :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         Apt 30
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6" gutterBottom>
                        City :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         Boston
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        State :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         MA
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        Country :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         USA
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        Zip :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         02215
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        No. of Beds :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         4
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        No. of Baths :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         5
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        Available Date :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                        1st Sept
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center"}}>
                    <Typography variant="h6"  gutterBottom>
                        Rate :&nbsp;
                    </Typography>
                    <Typography variant="body1"  gutterBottom>
                         2000
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="body1"  gutterBottom align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac vestibulum lacus. Fusce et luctus lectus. Aliquam sollicitudin erat a lectus ultrices, 
                        vitae consectetur ante varius. Duis condimentum massa a diam consectetur elementum. Pellentesque velit lorem, aliquam in aliquet nec, viverra a nisl. Fusce 
                        sagittis augue purus, in semper mauris tristique ac. Donec rutrum porta tortor, egestas accumsan est mattis quis. Morbi faucibus pellentesque tortor et imperdiet.
                        In ac dolor vitae elit elementum aliquam vel sed nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pharetra nisi 
                        vel pellentesque commodo. Nullam eleifend nulla et pretium ultricies.
                        Integer tincidunt justo sed aliquet cursus. Fusce efficitur elit massa, eu placerat dui lacinia et. Fusce maximus ante eget faucibus blandit. Vestibulum dignissim 
                        eleifend orci, volutpat hendrerit eros. Nullam eleifend sagittis feugiat. Nullam at nulla sed nibh vehicula mattis. Nullam id commodo mi. Curabitur aliquam lorem 
                        erat, ut ultricies lorem semper at. Integer luctus lorem sed massa aliquam eleifend.
                        Nullam vehicula, arcu dictum eleifend tempor, mauris dolor ultrices massa, laoreet efficitur odio ante ut felis. Duis viverra arcu vel sapien dictum pulvinar. Cras 
                        ac tortor ut leo accumsan sagittis. Sed nibh libero, dignissim laoreet ornare quis, malesuada nec purus. Class aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos. Morbi rhoncus turpis mi, nec iaculis ante tempor et. Nullam interdum lacus in arcu feugiat sagittis. Nulla facilisi. Donec lobortis,
                        quam eget facilisis imperdiet, dui risus porta ante, nec semper eros felis vitae risus. Vestibulum malesuada ut lectus in maximus.
                    </Typography>
                </Grid>


            </Grid>

            </div>
        </Container>
        <FooterComponent />
        </div>

    );
}