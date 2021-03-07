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
                    <Typography variant="h3" component="h3" gutterBottom>
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
            
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Address One
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="h6" gutterBottom>
                    Address Two
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        City
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        State
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Country
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Zip
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        No. of Beds
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        No. of Baths
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Available Date
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" component="h6" gutterBottom>
                        Rate
                    </Typography>
                </Grid>



            </Grid>

            </div>
        </Container>
        <FooterComponent />
        </div>

    );
}