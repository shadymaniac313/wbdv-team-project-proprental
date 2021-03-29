import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";
import SearchAppBar from "./search-bar.component";
import FooterComponent from "./footer.component";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(10, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
   
}));

const cards = [1, 2,3,4,5,6];

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline/>
            <div>
                <SearchAppBar/>
            </div>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary"
                                    gutterBottom>
                            Property Listing
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Your World is Worth Sharing. Turn your extra space into your next
                            opportunity.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} style={{justifyContent:"center"}} >
                                <Grid item>
                                    <Link to="/SignUp">
                                        <Button variant="contained" color="primary">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/SignIn">
                                        <Button variant="outlined" color="primary">
                                            Sign In
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} >
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://www.veteransunited.com/assets/craft/images/blog/_blogHero/va-loan-home.jpg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Listing
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to
                                            describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>     
            <FooterComponent />
        </div>
    );
}