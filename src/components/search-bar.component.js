import React, {useEffect, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import {alpha, makeStyles} from "@material-ui/core/styles";

import {Link, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import userService from "../services/user-service";

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
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userId, setUserId] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token") === "valid") {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
        setUserId(localStorage.getItem("userId"));

        userService.fetchUserById(localStorage.getItem("userId"))
            .then(fetchedUser => {
                console.log(fetchedUser, "fetchedUser")
                setIsAdmin(fetchedUser.userType === 0)
                console.log(isAdmin, "isAdmin")
            })
    }, []);

    // useEffect(() => {
    //     userService.fetchUserById(localStorage.getItem("userId"))
    //         .then(fetchedUser => {
    //             console.log(fetchedUser, "fetchedUser")
    //             let status = fetchedUser.userType === 0
    //             console.log(status, "status")
    //             setIsAdmin(status)
    //             console.log(isAdmin, "isAdmin")
    //         })
    // }, [userId])

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    &nbsp; &nbsp;
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link style={{textDecoration: "none", color: "white"}} to="/">
                            Property Listing
                        </Link>
                    </Typography>
                    {!isSignedIn && (
                        <>




                            <Link to="/register">
                                <Button variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Link>
                            &nbsp;&nbsp;
                            <Link to="/login">
                                <Button variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </Link>
                        </>
                    )}
                    {isSignedIn && (
                        <>
                            {
                                isAdmin &&
                                <Link to="/AddProperty">
                                    <Button variant="contained" color="primary">
                                        Add Property
                                    </Button>
                                </Link>
                            }
                            <Button
                                onClick={() => {
                                    history.push(`/profile/${userId}`);
                                }}
                                variant="contained"
                                color="primary"
                            >
                                Profile
                            </Button>
                            &nbsp;&nbsp;
                            <Link to="/">
                                <Button
                                    onClick={() => {
                                        localStorage.clear();
                                        setIsAdmin(false);
                                        setIsSignedIn(false);
                                    }}
                                    variant="contained"
                                    color="primary"
                                >
                                    Log Out
                                </Button>
                            </Link>
                        </>
                    )}
                    <div className={classes.search}></div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
