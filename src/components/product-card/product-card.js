import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./product-card.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import favService from "../../services/favorite-service";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  mcard: {
    width: "100%",
    margin: "6px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width:"100%"
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
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "5px",
  },
  cardcontainer: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "lightblue !important",
  },
  cardcontainerfav: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "lightgreen !important",
  },
}));

export default function ProductCard({
  img,
  location,
  title,
  price,
  bedroom,
  bathroom,
  PropertyType,
  ListingId,
  type,
  home
}) {
  const classes = useStyles();
  const history = useHistory();
  const [userId, setUserId] = useState(0);
  const [fav, setFav] = useState();
  const [isFav, setIsFav] = useState();

  useEffect(() => {
    if (userId) {
      favService.getFavListing(userId).then((fav) => {
        setFav(fav);
      });
    }
  }, [userId]);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  function handleFavoriteClick(e, ListingId) {
    favService.postFavListing(userId, ListingId).then((res) => {
      window.location.reload();
    });
  }

  function handleUnFavoriteClick(e, ListingId) {
    favService.postUnFavListing(userId, ListingId).then((res) => {
      window.location.reload();
    });
  }

  function isFavorite(flistId) {
    favService.checkIfFav(userId, flistId.ListingId).then((res) => {
      setIsFav(res);
    });
    if (isFav == true) {
      return true;
    }
    return false;
  }

  return (
    <Card className={classes.cardcontainer}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12} sm={6}>
          <img className={classes.img} alt="could not load image" src={img} />
        </Grid>
        <Grid item lg={8} md={6} sm={6}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div className={"row ml-auto"} style={{ float: "left" }}>
                <Typography gutterBottom variant="h6">
                  {(home === true) && <>{title}</>}
                  {(home !== true) &&
                  <>
                    <Link
                        // to = {`/propertypage/${type}/${ListingId}/`}
                        to={`/property/details/${ListingId}/`}
                    >
                      {title}
                    </Link>
                  </>}
                </Typography>
              </div>
              {userId != null && type == "local" ? (
                <div style={{ float: "right", marginBottom: "-35px" }}>
                  {isFavorite({ ListingId }) ? (
                    <div>
                      <Button
                        startIcon={<FavoriteIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={(e) => handleUnFavoriteClick(e, ListingId)}
                      >
                        Unfavorite
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        startIcon={<FavoriteIcon />}
                        variant="contained"
                        color="secondary"
                        onClick={(e) => handleFavoriteClick(e, ListingId)}
                      >
                        Favorite
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <br />
              )}
            </Grid>
            <Grid item xs>
              <Typography variant="body1">Locality : {location}</Typography>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Bedroom : {bedroom}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Bathroom : {bathroom}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  PropertyType : {PropertyType}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {/* <Typography variant="subtitle1">Price : $ {price}</Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
