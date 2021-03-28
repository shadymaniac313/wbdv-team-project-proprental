
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';

import './product-card.css';
import {Link} from "react-router-dom";

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
        star,
        price,
        total,
        onClick,
})  
{
    const classes = useStyles();
    
    return (
        <Card className={classes.mcard}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={img} />
                    </ButtonBase>
                </Grid>
                <Grid item sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="caption">
                                {location}
                            </Typography>
                            <Link to = {`/searchresults/${title}`} >
                            <Typography variant="subtitle1" >
                                {title}
                            </Typography>
                            </Link>
                            <Typography variant="body2" color="textSecondary">
                                ___
                            </Typography>
                            <Typography gutterBottom variant="caption">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    <StarIcon className="sr_star" />
                                        <strong>{star}</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" style={{float: "right"}}>
                                <b>{price}</b>
                                <p>{total}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        

    );
}


