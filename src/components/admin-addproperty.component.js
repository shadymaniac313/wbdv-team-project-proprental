import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import AppBar from "@material-ui/core/AppBar";
import SearchAppBar from './search-bar.component';
import FooterComponent from "./footer.component";


const useStyles = makeStyles((theme) => ({
   
}));

export default function AddProperty() {


    const classes = useStyles();

    return (
        <div>
        <Container component="main" maxWidth="xs">
        <SearchAppBar />
        <CssBaseline />
           
             
            
        </Container>
        <FooterComponent />
        </div>


      

    );
}