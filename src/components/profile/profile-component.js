import React, {useState} from "react";
import {Avatar, Card, CardContent, CardHeader, CardActions, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProfileData from "./profile-data";
import EditableProfileData from "./profile-data-editable";
import {Button} from "@material-ui/core";

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
            }
        }
    }

    parseProfileToDataRows = (profile) => {
        let id = 0
        // let arr = Object.keys(profile).map((key) => {
        //     id: {id++},
        //     col1: {key},
        //     col2: {profile[key]}
        // });
        console.log(Object.entries(profile))
        const arr = Object.entries(profile).map(e => e[1])
        console.log(arr)
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
            </div>
        )
    }

}