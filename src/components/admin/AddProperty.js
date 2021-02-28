import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../search-bar.component';
import FooterComponent from "../footer.component";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Dropzone from "../Dropzone"

const useStyles = makeStyles((theme) => ({
    addpropertycss: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(10),
        margin: theme.spacing(1),
      
    },
    addpropertyform: {
        width: '100%',
        marginTop: theme.spacing(1),
       
    },
}));

export default function AddProperty() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const classes = useStyles();

    return (
        <div>
        <Container component="main">
        <SearchAppBar />
        <CssBaseline /> 

                
        <div className={classes.addpropertycss}>
                <Typography component="h1" variant="h5">
                    Add New Property
                </Typography>
  
                <form className={classes.addpropertyform} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyName"
                                label="Property Name"
                                type="text"
                                id="propertyName"
                                autoComplete="Property Name"
                            />
                        </Grid>
                        
                        <Grid item xs={12}  sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyAddressOne"
                                label="Street Address One"
                                type="text"
                                id="propertyAddressOne"
                                autoComplete="Address One"
                            />
                        </Grid>
                        <Grid item xs={12}  sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyAddressTwo"
                                label="Street Address Two"
                                type="text"
                                id="propertyAddressTwo"
                                autoComplete="Address Two"
                            />
                        </Grid>
                        
                        <Grid item xs={12}  md={3} sm={6}> 
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertycity"
                                label="City"
                                type="text"
                                id="propertycity"
                                autoComplete="City"
                            />
                        </Grid>
                        <Grid item xs={12}  md={3} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyState"
                                label="State"
                                type="text"
                                id="propertyState"
                                autoComplete="State"
                            />
                        </Grid>
                        <Grid item xs={12}  md={3} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyCountry"
                                label="Country"
                                type="text"
                                id="propertyCountry"
                                autoComplete="Country"
                            />
                        </Grid>
                        <Grid item xs={12}  md={3} sm={6}>
                            <TextField
                               
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyZip"
                                label="Zip"
                                type="number"
                                id="propertyZip"
                                autoComplete="Zip"
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={8}
                                name="propertyDescription"
                                label="Property Description"
                                type="text"
                                id="propertyDescription"
                                autoComplete="Property Description"
                            />
                        </Grid>
                        
                        <Grid item xs={12}  md={3} sm={6}> 
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                name="propertyBedroom"
                                label="Number of Bedrooms"
                                type="number"
                                id="propertyBedroom"
                                autoComplete="Bedroom"
                            />
                        </Grid>
                        <Grid item xs={12}  md={3} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                name="propertyBathroom"
                                label="Number of Bathroom"
                                type="number"
                                id="propertyBathroom"
                                autoComplete="Bathroom"
                            />
                        </Grid>                   
                        {/* Date Picker Here */}
                        <Grid item xs={12}  md={3} sm={6} >
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <KeyboardDatePicker
                                margin="normal"
                                id="propertyAvailableDate"
                                label="Available date"
                                format="MM/dd/yyyy"
                                fullWidth
                                minDate={selectedDate}
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                             />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}  md={3} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="propertyRate"
                                label="Rate"
                                type="number"
                                InputProps={{ inputProps: { min: 0 } }}
                                id="propertyRate"
                                autoComplete="Rate"
                               
                              
                            />
                        </Grid>
                        {/* Drop Zone */}
                        <Grid item xs={12} >
                           <Dropzone />
                        </Grid>
                    </Grid>

                    {/* Form Buttons */}
                    <Grid container 
                    style={{marginTop:20}}
                    className={classes.addPropertyBtns}
                    direction="row"
                    justify="space-around">
                        <Grid item >
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >Add</Button>
                        </Grid>
                        <Grid item  >
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >Clear</Button>
                        </Grid>
                        <Grid item >
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >Cancel</Button>
                        </Grid>
                    </Grid>
               
                </form>
            </div>
                
            
        </Container>
        <FooterComponent />
        </div>
    );
}