import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchAppBar from "./search-bar.component";
import FooterComponent from "./footer.component";
import searchService from "../services/search-service";
import homepageService from "../services/homepage-service";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link, useHistory } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import background from "../resources/imgs/skyscrapers-sunset.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: "url('background')",
    padding: theme.spacing(10, 0, 6),
    height: "60vh",
    marginLeft: "-15px",
    marginRight: "-15px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  searchElement: {
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "white",
    width: "25vw",
    padding: "2px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [cityName, setCityName] = useState("");
  const history = useHistory();

  const [results, setResults] = useState({ bundle: [] });
  useEffect(() => {
    homepageService.fetchSix().then((results) => {
      setResults(results);
    });
  }, []);

  return (
    <div>
      <CssBaseline />
      <div>
        <SearchAppBar />
      </div>
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{ backgroundImage: `url(${background})` }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Property Listing
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Your World is Worth Sharing. Turn your extra space into your next
              opportunity.
            </Typography>
            <div className={classes.searchElement}>
              <InputBase
                placeholder=" Enter State like CA, MA ....."
                className={classes.searchBar}
                color="secondary"
                inputProps={{ "aria-label": "search" }}
                
                onChange={(event) => setCityName(event.target.value)}
              />
              <Button
                startIcon={<SearchIcon />}
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push(`/search/${cityName}`);
                }}
              >
                Search
              </Button>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {results.bundle.map((City, i) => {
              if (i < 6) {
                return (
                  <Grid item key={City.ListingId} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={City.Media[1]["MediaURL"]}
                        title={City.BuildingName}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {City.BuildingName}
                        </Typography>
                        <Typography>{City.PublicRemarks}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
      </main>
      <FooterComponent />
    </div>
  );
}
