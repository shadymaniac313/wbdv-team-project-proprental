import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Gmap from "./map";
import SearchAppBar from "./search-bar.component";
import ProductCard from "./product-card/product-card";
import "leaflet/dist/leaflet.css";
import searchService from "../services/search-service";
import { Link, useParams, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
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

export default function ProductVisibility() {
  const classes = useStyles();
  const city = useParams();
  const [results, setResults] = useState({ bundle: [] });
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    if (city) {
      searchService.findParcelByState(city).then((response) => {
        setResults(response);
      });
    }
  }, [city]);

  useEffect(() => {
    const idArray = [];
    for (let i = 0; i < results.bundle.length; i += 1) {
      idArray.push(results.bundle[i].id);
    }

    const priceArray = [];
    for (let i = 0; i < idArray.length; i += 1) {
      searchService.findZestimateByParcel(idArray[i]).then((response) => {
        for (let i = 0; i < response.bundle.length; i += 1) {
          priceArray.push(response.bundle[i].rental.zestimate);
        }
      });
    }
    setPrices(priceArray);
  }, [results]);

  return (
    <div>
      {console.log(prices[0])}
      <SearchAppBar />
      <main className={classes.paper2}>
        <Grid container spacing={1} direction="row">
          <Grid item md={7} xs={12}>
            {results.bundle.map((City, index) => (
              <ProductCard
                title={City.address.full}
                location={City.address.full}
                bedroom={City.building[0].bedrooms}
                bathroom={City.building[0].fullBaths}
                description={City.landUseDescription}
                price={prices[index]}
                PropertyType={City.PropertyType}
                img="https://picsum.photos/200"
                ListingId={City.id}
              />
            ))}
          </Grid>
          <Grid item md={5} style={{ height: "100vh" }}>
            {results.bundle.map((City, index) => (
              <Gmap lat={City.Latitude} lng={City.Longitude} />
            ))}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
