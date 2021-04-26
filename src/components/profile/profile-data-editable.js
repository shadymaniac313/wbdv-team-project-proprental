import React from "react";
import {Button, TextField} from "@material-ui/core";
import userService from "../../services/user-service";

export default class EditableProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            Phone: "",
            Username: "",
            Password: ""
        };
    }

    componentDidMount() {
        console.log(this.props.profile, "sentprofile")
        this.setState((prevState) => ({
            ...prevState,
            profileData: this.props.profile,
            FirstName: this.props.profile.FirstName,
            LastName: this.props.profile.LastName,
            Phone: this.props.profile.Phone,
            Username: this.props.profile.Username,
            Password: this.props.profile.Password
        }));
    }

    handleUsernameChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            Username: e.target.value,
        }));
    };

    handlePasswordChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            Password: e.target.value,
        }));
    };

    handleFirstNameChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            // profileData.FirstName: e.target.value,
            FirstName: e.target.value
        }));
    };

    handleLastNameChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            LastName: e.target.value,
        }));
    };

    handlePhoneChange = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            Phone: e.target.value,
        }));
    };

    handleSave = (profile, setProfileData, setEditing) => {
        setProfileData(profile);
        setEditing(false);
        userService.saveUserProfile(localStorage.getItem("userId"), profile.FirstName, profile.LastName, profile.Username, profile.Password, profile.Phone)
            .then(response => console.log(response))
    };

    render() {
        return (
            <form noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={this.state.Username}
                    autoFocus
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.Password}
                    autoComplete="current-password"
                    onChange={this.handlePasswordChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    value={this.state.FirstName}
                    autoComplete="Ada Lovelace"
                    autoFocus
                    onChange={this.handleFirstNameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    value={this.state.LastName}
                    autoComplete="Ada Lovelace"
                    autoFocus
                    onChange={this.handleLastNameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    value={this.state.Phone}
                    label="Phone"
                    name="phone"
                    autoFocus
                    onChange={this.handlePhoneChange}
                />
                <Button
                    onClick={() => {
                        if (this.state.Password.length < 8) {
                            alert("Password must be at least 8 characters long!")
                        } else {
                            this.handleSave(
                                {
                                    FirstName: this.state.FirstName,
                                    LastName: this.state.LastName,
                                    Phone: this.state.Phone,
                                    Username: this.state.Username,
                                    Password: this.state.Password
                                },
                                this.props.setProfileData,
                                this.props.setEditing
                            )
                        }
                    }
                    }
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </form>
        );
    }
}
