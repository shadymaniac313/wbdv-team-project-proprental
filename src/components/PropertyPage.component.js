import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useParams} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchAppBar from './search-bar.component';
import FooterComponent from "./footer.component";
import searchService from "../services/search-service";
import {Carousel, CarouselCaption, CarouselControl, CarouselItem} from 'reactstrap';


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


export default function PropertyPage() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState([])
    const listingID = useParams()
    const [singleresults, setsingleresults] = useState({
        bundle: [{
            Media: '',
            UnparsedAddress: '',
            UnitNumber: '',
            CityRegion: '',
            PostalCode: '',
            StateOrProvince: '',
            BedroomsTotal: '',
            BathroomsFull: '',
            AvailabilityDate: '',
            PreviousListPrice: '',
            PublicRemarks: '',
            BuildingName: ''
        }]
    });

    useEffect(() => {
        if (listingID) {
            searchService.findPropertyDetailsByListingID(listingID).then((singleresults) => {
                setsingleresults(singleresults);
                console.log(singleresults.bundle[0].UnparsedAddress, "unparsedaddress")
                setItems(singleresults.bundle[0].Media.map((el) => ({
                    src: el.MediaURL,
                    caption: el.ShortDescription
                })))
            });
        }
    }, [listingID]);

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
            <CarouselItem key={item.src}>
                <img src={item.src} style={{width: "100%", height: "50vh"}}/>
                <CarouselCaption captionHeader={item.caption}/>
            </CarouselItem>
        );
    });

    const classes = useStyles();

    return (
        <div>
            <Container component="main">
                <SearchAppBar/>
                <CssBaseline/>
                <div className={classes.propertypage}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom>
                            {singleresults.bundle[0].BuildingName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                            </Carousel>
                        </Grid>

                        <Grid item xs={12} md={6} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Address One:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].UnparsedAddress}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Address Two:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].UnitNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                City:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].CityRegion}, {singleresults.bundle[0].City}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                State:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].StateOrProvince}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Country:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].Country}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Zip:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].PostalCode}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                No. of Beds:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].BedroomsTotal}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                No. of Baths:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].BathroomsFull}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Available Date:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].AvailabilityDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Previous List Price:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle[0].PreviousListPrice}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom align="justify">
                                {singleresults.bundle[0].PublicRemarks}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <FooterComponent/>
        </div>

    );
}