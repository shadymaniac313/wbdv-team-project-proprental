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
import localSearchService from "../services/local-search-service";
import { Link, useParams, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { gridColumnsTotalWidthSelector } from "@material-ui/data-grid";
import FooterComponent from "./footer.component";

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
  const [localResults, setLocalResults] = useState({});
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (city) {
      searchService.findParcelByState(city).then((response) => {
        setResults(response);
        const idArray = [];
        for (let i = 0; i < response.bundle.length; i += 1) {
          idArray.push(response.bundle[i].id);
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
      });
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      localSearchService.findParcelByState(city).then((response) => {
        console.log(response,'response of local');
        setLocalResults(response);
      });
    }
  }, []);

  return (
    <div>
      <SearchAppBar />

      <main className={classes.paper2}>
        <Typography variant="h6" align="left">
          Let's have a look at properties in {city.city} :
        </Typography>
        &nbsp;
        <Grid container spacing={1} direction="row">

        {/* Left Side -- Data */}
          <Grid item md={7} xs={12}  
            md={7}
            xs={12}
            style={{ height: "90vh", overflowX: "hidden" }}
          >
                {/* Local Results */}
                {localResults !== undefined && (
                  <div>

                    {[localResults].map(
                      (property, index) =>
                        Object.keys(property).length !== 0 && (
                          <div>
                            {/* <h2>{JSON.stringify(property)}</h2> */}
                            <ProductCard
                              title={property[0]["propertyDetails"]["city"]}
                              location={property[0]["propertyDetails"]["city"]}
                              bedroom={property[0]["propertyDetails"]["bedCount"]}
                              bathroom={property[0]["propertyDetails"]["bathCount"]}
                              local={true}
                              description={property[0]["amenities"].map(
                                (item, index) => (
                                  <>{item.description}</>
                                )
                              )}
                              price={0}
                              PropertyType={property[0]["propertySource"]}
                              img="https://picsum.photos/200"
                              ListingId={
                                property[0]["propertyDetails"]["propertyId"]
                              }
                              type={"local"}
                            />
                          </div>
                        )
                    )}
                  </div>
                )}

                {/* API Results */}
                {results.bundle.map((City, index) => (
                  <ProductCard
                    title={City.address.full}
                    location={City.county}
                    bedroom={City.building[0].bedrooms}
                    bathroom={City.building[0].fullBaths}
                    price={100}
                    PropertyType={City.landUseDescription}
                    img="https://picsum.photos/200"
                    ListingId={City.id}
                    type={"zillow"}
                  />
                ))}
          </Grid>

          
          
          {/* Right Side -- MAP */}

          <Grid item md={5} style={{ height: "90vh", overflow: "hidden" }}>
            {results.bundle.slice(0, 1).map((City, index) => (
              <Gmap lat={City.coordinates[1]} lng={City.coordinates[0]} />
            ))}
          </Grid>

        </Grid>
      </main>

      <br />
      <FooterComponent />
    </div>
  );
}
