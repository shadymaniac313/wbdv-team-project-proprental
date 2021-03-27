import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SRmap from "./map";
import Container from "@material-ui/core/Container";
import SearchAppBar from "./search-bar.component";
import ProductCard from "./product-card/product-card";
import "leaflet/dist/leaflet.css";
import searchService from "../services/search-service";
import { Link, useParams, useHistory } from "react-router-dom";

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

export default function ProductVisibility({ cityName }) {
  const classes = useStyles();
  const city = useParams();
  const [results, setResults] = useState({ bundle: [] });
  useEffect(() => {
    if (city) {
      searchService
        .findPropertyByCity(cityName)
        .then((results) => setResults(results));
    }
  }, [cityName, city]);

  return (
    <div>
      <SearchAppBar />
      <main className={classes.paper2}>
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
              />
            ))}
          </Grid>
          <Grid item md={6}>
            <SRmap />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
