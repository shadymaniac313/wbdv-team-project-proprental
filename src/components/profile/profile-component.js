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
            editing: false
        }
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

    render() {

        return (
            <div className={"container"}>
                        <div style={{height:'100%'}}>
                            {
                                !this.state.editing &&
                                <ProfileData/>
                            }
                            {
                                this.state.editing &&
                                <EditableProfileData/>
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
                {
                    this.state.editing &&
                    <Button
                        onClick={this.handleSave}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >Save</Button>
                }
            </div>
        )
    }

}