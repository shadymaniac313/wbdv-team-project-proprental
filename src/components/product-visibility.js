import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SRmap from "./map";
import SearchAppBar from "./search-bar.component";
import ProductCard from "./product-card/product-card";
import "leaflet/dist/leaflet.css";
import searchService from "../services/search-service";
import { Link, useParams, useHistory } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: "center",
    height: "100%",
  },
  paper2: {
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid: {
    height: "100%",
  },
  body: {
    height: "100%",
  },
  html: {
    height: "100%",
  },
}));

const names = [
  "James",
  "Paul",
  "John",
  "George",
  "Ringo",
  "James",
  "Paul",
  "John",
  "George",
  "Ringo",
];


export default function ProductVisibility() {
 

  const classes = useStyles();
  const city = useParams();
  const [results, setResults] = useState({ bundle: [] });
  useEffect(() => {
    if (city) {
      searchService.findPropertyByCity(city).then((results) => {
        setResults(results);
        console.log(results.bundle,'Results');
        
      });
    }
  }, [city]);



  return (
    <div>
    
    <SearchAppBar />
    <main className={classes.paper2}>
        <Grid container spacing={1} direction="row">
          <Grid item md={7} xs={12} >  
          {results.bundle.map((City, index) => (
              <ProductCard
                title={City.BuildingName}
                location={City.UnparsedAddress}
                bedroom={City.BedroomsTotal}
                bathroom={City.BathroomsFull}
                description={City.PublicRemarks}
                price={City.ListPrice}
                PropertyType={City.PropertyType}
                img={City.Media[0].MediaURL}
              />
            ))}
          </Grid>
          <Grid item md={5} style={{height: '100vh'}}>
              {
                results.bundle.map((City,index) => (
                <GoogleMapReact
                         bootstrapURLKeys={{ key:"AIzaSyBRXtcENtFZq1UuHYwMdD7-UbGQEPvFLrw" }}
                         defaultCenter={{lat:City.Latitude,lng:City.Longitude}}
                         defaultZoom={11}
                >
              </GoogleMapReact>
                ))
              }
          </Grid>
        </Grid>
    </main> 
    </div>
  );
}
