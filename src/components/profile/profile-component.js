import React, {useState, useEffect} from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProfileData from "./profile-data";
import EditableProfileData from "./profile-data-editable";
import userService from "../../services/user-service";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../product-card/product-card";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            profileData: {
                Email: 'adalovelace@gmail.com',
                Password: '****',
                FirstName: 'Ada',
                LastName: 'Lovelace',
                Phone: '+15456362198'
            },
            us:{'listings':[{"listingId":3,"propertyId":3,"saleType":"Outright","rate":700000,"agentId":3}]}
        }

    }

    componentDidMount() {

        // console.log(this.state.us)
       userService.fetchUserFromId(2).then(response => {console.log(response);  this.setState({us :  response}); return response})
    }

    parseProfileToDataRows = (profile) => {
        let id = 0
        const arr = Object.entries(profile).map(e => e[1])
    }


    handleEdit = () => {
        this.setState({
            editing: true
        })
    }

    handleSave = () => {
        this.setState({
            editing: false
        })
    }

    setProfileData = (newProfileData) => {
        this.setState((prevState) => ({
            ...prevState,
            profileData: newProfileData
        }))
    }

    setEditing = (value) => {
        this.setState((prevState) => ({
            ...prevState,
            editing: value
        }))
    }

    render() {
        this.parseProfileToDataRows(this.state.profileData)
        // const listings= this.state.us["listings"].map((item) => {
        //     <p>{item}</p>
        // })

        const listings = this.state.us["listings"].map((listitem) =>    {
            return <div>
                {/*<ProductCard*/}
                {/*    title={listitem["propertyDetails"]["city"]}*/}
                {/*    location={property[0]["propertyDetails"]["city"]}*/}
                {/*    bedroom={property[0]["propertyDetails"]["bedCount"]}*/}
                {/*    bathroom={property[0]["propertyDetails"]["bathCount"]}*/}


                {/*    description={property[0]["amenities"].map((item, index) => (<>{item.description}</>))}*/}
                {/*    price={0}*/}
                {/*    PropertyType={property[0]["propertySource"]}*/}
                {/*    img="https://picsum.photos/200"*/}
                {/*    ListingId={property[0]["propertyDetails"]["propertyId"]}*/}
                {/*/>*/}

            </div>
        }  );

        console.log({listings})


        return (
            <div className={"container"}>
                <h1>Profile</h1>
                <div style={{height: '100%'}}>
                    {
                        !this.state.editing &&
                        <ProfileData rows={this.state.profileData}/>
                    }
                    {
                        this.state.editing &&
                        <EditableProfileData
                            profile={this.state.profileData}
                            setProfileData={this.setProfileData}
                            setEditing={this.setEditing}
                        />
                    }
                </div>
                {
                    !this.state.editing &&
                    <Button
                        onClick={this.handleEdit}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >Edit</Button>
                }
                {/*{*/}
                {/*    this.state.editing &&*/}
                {/*    <Button*/}
                {/*        onClick={this.handleSave}*/}
                {/*        fullWidth*/}
                {/*        variant="contained"*/}
                {/*        color="primary"*/}
                {/*    >Save</Button>*/}
                {/*}*/}

                <h1>
                    {/*<p>{localStorage.getItem("userid")}</p>*/}
                    <p>{JSON.stringify(this.state.us["listings"])}</p>
                    <p>
                        {
listings
                        }
                    </p>
                </h1>

                <Grid container spacing={1} direction="row">

                    <Grid item md={7} xs={12}>
                        {
                            <div>
                                {

                                }
                            </div>
                        }

                    </Grid>
                </Grid>
            </div>
        )
    }

}