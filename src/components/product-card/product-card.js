
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';

import './product-card.css';

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
        width: 128,
        height: 128,
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
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
})  
{
    const classes = useStyles();
    
    return (
        <Card className={classes.mcard}>
            <div className='sr'>
                <div className="leftimage">
                    <img src={img} alt="" />
                </div>
                <div className= "rightbox">
                <FavoriteBorderIcon className="sr_fav" />

                <div className='sr_info'>
                    <div className="sr_top">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>____</p>
                        <p>{description}</p>
                    </div>

                    <div className="sr_bot">
                        <div className="sr_stars">
                            <StarIcon className="sr_star" />
                            <p>
                                <strong>{star}</strong>
                            </p>
                        </div>
                        <div className='sr_price'>
                            <b>{price}</b>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Card>

    );
}


