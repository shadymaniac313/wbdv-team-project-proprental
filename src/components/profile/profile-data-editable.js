import React from "react";
import { Button, TextField } from "@material-ui/core";

export default class EditableProfileData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "default",
      password: "default",
      firstName: "default",
      lastName: "default",
      phone: "default",
    };
  }

  componentDidMount() {
    this.setState({
      email: this.props.profile.Email,
      password: this.props.profile.Password,
      firstName: this.props.profile.FirstName,
      lastName: this.props.profile.LastName,
      phone: this.props.profile.Phone,
    });
  }

  handleEmailChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  handlePasswordChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  handleFirstNameChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      firstName: e.target.value,
    }));
  };

  handleLastNameChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      lastName: e.target.value,
    }));
  };

  handlePhoneChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  };

  handleSave = (profile, setProfileData, setEditing) => {
    setProfileData(profile);
    setEditing(false);
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
          label="Email Address"
          name="email"
          autoComplete="email"
          value={this.state.email}
          autoFocus
          onChange={this.handleEmailChange}
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
          value={this.state.password}
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
          value={this.state.firstName}
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
          value={this.state.lastName}
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
          type={this.state.phone}
          label="Phone"
          name="phone"
          value={"6173732130"}
          autoFocus
          onChange={this.handlePhoneChange}
        />
        <Button
          onClick={() =>
            this.handleSave(
              {
                Email: this.state.email,
                Password: this.state.password,
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                Phone: this.state.phone,
              },
              this.props.setProfileData,
              this.props.setEditing
            )
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
