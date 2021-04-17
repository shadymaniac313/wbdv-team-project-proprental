import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchAppBar from "./search-bar.component";
import FooterComponent from "./footer.component";
import searchService from "../services/search-service";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselItem,
} from "reactstrap";
import localSearchService from "../services/local-search-service";
import {Carousel, CarouselCaption, CarouselControl, CarouselItem} from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  propertypage: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PropertyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);
  const listingID = useParams();
  const [userId, setUserId] = useState();
  const [singleresults, setsingleresults] = useState({
    bundle: {
      Media: "",
      UnparsedAddress: "",
      UnitNumber: "",
      CityRegion: "",
      PostalCode: "",
      StateOrProvince: "",
      BedroomsTotal: "",
      BathroomsFull: "",
      AvailabilityDate: "",
      PreviousListPrice: "",
      PublicRemarks: "",
      BuildingName: "",
      address: {
        full: "",
        city: "",
        state: "",
        country: "US",
        zip: "",
      },
      building: [
        {
          bedrooms: "",
        },
      ],
      areas: [
        {
          areaSquareFeet: "",
        },
      ],
    },
  });


  useEffect(() => {
    if (listingID) {
      searchService.findParcelById(listingID).then((singleresults) => {
        setsingleresults(singleresults);
        console.log(singleresults);
      });
    }
  }, [listingID]);

  useEffect(() => {
    fetch(
      `https://picsum.photos/v2/list?page=${Math.ceil(
        (Math.random() * 100) % 10
      )}&limit=5`
    )
      .then((response) => response.json())
      .then((images) =>
        setItems(
          images.map((image) => ({
            src: image.download_url,
            caption: image.author,
          }))
        )
      );
  }, [singleresults]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [items, setItems] = useState([])
    const paramObject = useParams()
    const propertyType = paramObject.type;
    
    //API Results Stored Here
    const [singleresults, setsingleresults] = useState({
        bundle: {
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
            BuildingName: '',
            address: {
                full: '',
                city: '',
                state: '',
                country: 'US',
                zip: ''
            },
            building: [
                {
                    bedrooms: ''
                }
            ],
            areas: [
                {
                    areaSquareFeet: ''
                }
            ]
        }
    });

    //Local Results Stored Here
    const [localResults, setLocalResults] = useState({
        amenities: [
            {
                description: '',
            },
        ],
        id:'',
        propertyDetails:{
            areaSqFt: '',
            bathCount: '',
            bedCount: '',
            city: '',
            propertyId: '',
            state: '',
            zipcode: '',
        }
    });

    useEffect(() => {
        if (paramObject.type=="zillow") {
            searchService.findParcelById(paramObject).then((singleresults) => {
                setsingleresults(singleresults); 
                console.log(singleresults, 'Zillow Results')
            });
        }
        else  {
            console.log('local API invoked')
            localSearchService.findParcelById(paramObject).then((localResults) => {
                setLocalResults(localResults);
                console.log(localResults, 'Local Results')
            });
            
        }
    }, [paramObject]);


  useEffect(() => {
    setUserId(localStorage.get("userId"));
  }, []);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.src}>
        <img src={item.src} style={{ width: "100%", height: "50vh" }} />
        <CarouselCaption captionHeader={item.caption} />
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
                    
                    {
                        (propertyType=="local")
                        ?
                        //
                        // Local Propery Page
                        //
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom>
                               {localResults.propertyDetails.city}, {localResults.propertyDetails.state}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                City:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.city}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                State:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.state}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Zipcode:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.zipcode}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Area:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.areaSqFt}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Bedrooms:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.bedCount}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Bathrooms:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.propertyDetails.bathCount}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Amenities:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {localResults.amenities[0].description}
                            </Typography>
                        </Grid>
                        </Grid>
                        :
                        //
                        // API Propery Page
                        //
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom>
                                {singleresults.bundle.address.full}
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
                                {singleresults.bundle.address.full}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Address Two:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.UnitNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                City:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.address.city}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                State:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.address.state}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Country:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                US
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Zip:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.address.zip}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                No. of Beds:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.building[0].bedrooms}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                No. of Baths:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.building[0].fullBaths ? singleresults.bundle.building[0].fullBaths : "NA"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Area:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.areas[0] ? singleresults.bundle.areas[0].areaSquareFeet + " sq.ft." : "NA"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} style={{display: "flex", alignItems: "center"}}>
                            <Typography variant="h6" gutterBottom>
                                Previous List Price:&nbsp;
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {singleresults.bundle.PreviousListPrice}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom align="justify">
                                {singleresults.bundle.PublicRemarks}
                            </Typography>
                        </Grid>
                    </Grid>
                
                    }


                    
                    
                </div>
            </Container>
            <FooterComponent/>
        </div>
      </Container>
      <FooterComponent />
    </div>
  );
}
