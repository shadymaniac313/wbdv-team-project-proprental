import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha , makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ApartmentRoundedIcon from "@material-ui/icons/ApartmentRounded";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",

    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {

  const classes = useStyles();
  const [cityName, setCityName] = useState("");
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <ApartmentRoundedIcon className={classes.icon} />
          &nbsp; &nbsp;
          <Typography className={classes.title} variant="h6" noWrap>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Property Listing
            </Link>
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder=" Enter City…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
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
        </Toolbar>
      </AppBar>
    </div>
  );

}
