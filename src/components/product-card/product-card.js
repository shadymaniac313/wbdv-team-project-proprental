import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './product-card.css';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mcard: {
        width:'100%',
        margin: '6px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // width:"100%"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        width: '100%',
        height: '100%',
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '5px',
      },
}));

export default function ProductCard({
        img,
        location,
        title,
        description,
        price,
        bedroom,
        bathroom,
        PropertyType,
        ListingId
})  
{
    const classes = useStyles();
    const history = useHistory();

    return (
        <Card className={classes.mcard}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} xs={12} sm={6}>
                    <img 
                        className={classes.img} 
                        alt="could not load image"
                        src={img} 
                    />
              </Grid>
                <Grid item lg={8} md={6} sm={6}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h6">
                                <Link   onClick={() => {
                                        history.push(`/propertypage/${ListingId}`);
                                    }}            
                                                        
                                >
                                   {title}
                                </Link>
                            </Typography>
                            <Typography variant="body1">
                                {location}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm container>
                           <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                   Bedroom :  {bedroom}  
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                   Bathroom :  {bathroom}  
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm container>
                           <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                   PropertyType :  {PropertyType}  
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                  Price :  $ {price}  
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Typography     
                                variant="body2"
                                align="justify"
                            >
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        

    );
}


