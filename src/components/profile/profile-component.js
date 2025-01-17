import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProfileData from "./profile-data";
import EditableProfileData from "./profile-data-editable";
import userService from "../../services/user-service";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../product-card/product-card";
import SearchAppBar from "../search-bar.component";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

var proplist = [];

export default class ProfileComponent extends React.Component {

    constructor(props) {
        localStorage.setItem("agentIdRequested", props.match.params.userId);
        super(props);
        this.state = {
            editing: false,
            profileData: {
                Email: "",
                Password: "",
                FirstName: "",
                LastName: "",
                Phone: "",
            },
            us: {listings: []},
            listingsforid: [],
        };
    }


    componentDidMount() {


        if (localStorage.getItem("userId") !== null) {

            let mlist = [];
            userService
                .fetchListingsFromUserid(localStorage.getItem("userId"))
                .then((response) => {
                    this.setState({listingsforid: response});
                    console.log(response);
                    return;
                })
                .then((response) => {
                    this.state.listingsforid.map((listings) => {
                        userService
                            .fetchPropertiesFromListingId(listings.listingId)
                            .then((response) => {
                                mlist.push(response);
                                this.setState({us: mlist});

                                return;
                            });
                    });
                });

            // update profile details to details of currently logged in user
            // userService.fetchUserById(localStorage.getItem("userId")).then((user) => {
            userService.fetchUserById(this.props.match.params.userId).then((user) => {
                this.setProfileData({
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    Phone: user.phone,
                    Username: user.userAuth.username,
                    Password: user.userAuth.pwd,
                });
            });
        } else {

            alert("Please LogIn to continue");
            window.location = "/login"
        }
    }

    parseProfileToDataRows = (profile) => {
        let id = 0;
        const arr = Object.entries(profile).map((e) => e[1]);
    };

    handleEdit = () => {
        this.setState({
            editing: true,
        });
    };

    handleSave = () => {
        this.setState({
            editing: false,
        });
    };

    setProfileData = (newProfileData) => {
        this.setState((prevState) => ({
            ...prevState,
            profileData: newProfileData,
        }));
    };

    setEditing = (value) => {
        this.setState((prevState) => ({
            ...prevState,
            editing: value,
        }));
    };

    render() {
        this.parseProfileToDataRows(this.state.profileData);

        return (
            localStorage.getItem("userId") !== null && (
                <div className={"container"}>
                    <SearchAppBar/>;
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Profile</h1>
                    <div style={{height: "100%"}}>
                        {!this.state.editing && (
                            <ProfileData rows={this.state.profileData}/>
                        )}
                        {this.state.editing && (
                            <EditableProfileData
                                profile={this.state.profileData}
                                setProfileData={this.setProfileData}
                                setEditing={this.setEditing}
                            />
                        )}
                    </div>
                    {!this.state.editing &&
                    localStorage.getItem("userId") === this.props.match.params.userId &&
                    (
                        <Button
                            onClick={this.handleEdit}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Edit
                        </Button>
                    )}
                    {/*{console.log(localStorage.getItem("userId") === this.props.match.params.userId)}*/}
                    {localStorage.getItem("userId") === this.props.match.params.userId && <h1>Liked Listings</h1>}
                    {localStorage.getItem("userId") === this.props.match.params.userId &&
                    Array.from(this.state.us).map((property) => {
                        return (
                            <>
                                <ProductCard
                                    title={property[0]["propertyDetails"]["city"]}
                                    location={property[0]["propertyDetails"]["city"]}
                                    bedroom={property[0]["propertyDetails"]["bedCount"]}
                                    bathroom={property[0]["propertyDetails"]["bathCount"]}
                                    description={property[0]["amenities"].map((item, index) => (
                                        <>{item.description}</>
                                    ))}
                                    price={Math.floor(Math.random() * (5000 - 1000 + 1) + 1000)}
                                    PropertyType={property[0]["propertySource"]}
                                    img="https://picsum.photos/200"
                                    ListingId={property[0]["propertyDetails"]["propertyId"]}
                                    type="local"
                                />
                            </>
                        );
                    })}
                    <Grid container spacing={1} direction="row">
                        <Grid item md={7} xs={12}>
                            {<div>{}</div>}
                        </Grid>
                    </Grid>
                </div>
            )
        );
    }
}
