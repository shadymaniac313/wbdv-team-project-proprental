import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import SearchAppBar from "./search-bar.component";
import ProductCard from "./product-card/product-card";
import { Link, useParams, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FooterComponent from "./footer.component";
import Button  from "@material-ui/core/Button";


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

export default function NoProductVisibility() {
 
  const classes = useStyles();
  
  return (
    <div>
      <SearchAppBar />

      <main className={classes.paper2}>
         
      <div align="center">
            <Typography variant="h4" align="left">
                No Property found
            </Typography>
            <br />
             Go back to &nbsp;
              <Link to="/">
                    <Button  color="primary">
                      Home
                    </Button>
              </Link>
              &nbsp;to search again
          </div>
    
  
        
      </main>

      <br />
      <FooterComponent />
    </div>
  );
}
