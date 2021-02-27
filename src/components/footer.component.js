import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function FooterComponent() {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>   
            <Typography variant="h6" align="center" gutterBottom>
                Property Listing
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Made with love at Northeastern
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Property Listing
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}
