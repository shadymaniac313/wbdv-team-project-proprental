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
      cardcontainer: {
        margin:'10px',
        padding:'10px',
        backgroundColor: 'lightblue !important', 
      },
    cardcontainerfav: {
        margin:'10px',
        padding:'10px',
        backgroundColor: 'lightgreen !important',
    }
    
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
        ListingId,
        type
        // setFav,
        // fav
})  
{
    // function handleFavoriteClick(e,ListingId) {
    //     console.log(ListingId,'ID received')
    //     const copyfav= [...fav]
    //     if(copyfav.includes(ListingId)){
    //       return alert('Already on the list ')
    //     }
    //      copyfav.push(ListingId)
    //      setFav(copyfav)
    //      console.log(fav,'Fav')
    // }
    
    // function handleUnFavoriteClick(e,ListingId) {
    //     const copyfav= [...fav]
    //     if(!copyfav.includes(ListingId)){
    //       return alert('You have not favorite it yet  ')
    //     }
    //   const getIndex = copyfav.indexOf(ListingId)
    //   copyfav.splice(getIndex,1)
      
    //   setFav(copyfav)
    //   console.log(copyfav,'copyfav');
    // }
    
    // function isFavorite () {
    //   return fav.includes(ListingId)
    // }

    const classes = useStyles();
    const history = useHistory();

    return (
        // <Card className={ isFavorite() ? classes.cardcontainerfav : classes.cardcontainer } >
        <Card className={ classes.cardcontainer } >
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
                            <div className={"row ml-auto"} style={{"float":"left"}}>
                                      
                                    <Typography gutterBottom variant="h6">
                                        <Link   onClick={() => {
                                            history.push(`/propertypage/${type}/${ListingId}/`);
                                        }}
                                        >
                                        {title}
                                        </Link>
                                    </Typography>
                                
                            </div>
                            {/* <div style={{float:"right",marginBottom:"-35px"}}>
                                <i className="btn shadow-sm p-2 mb-5 bg-white rounded far fa-heart"></i>
                            </div> */}

                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1">
                               Locality :  {location}
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
                        <Grid item xs={12} sm container>
                        {/*<button onClick={(e)=>handleFavoriteClick(e,ListingId)}>Favorite</button>*/}
                        {/*<button onClick={(e)=>handleUnFavoriteClick(e,ListingId)}>Unfavorite</button>*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        

    );
}


