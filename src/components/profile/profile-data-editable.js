import React from "react";
import {Button, TextField} from "@material-ui/core";

const handleSave = (profile, setProfileData, setEditing) => {
    setProfileData(profile)
    setEditing(false)
}


const EditableProfileData = ({
                                 profile,
                                 setProfileData,
                                 setEditing
                             }) => {
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
                value={profile.Email}
                autoFocus
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
                value={profile.Password}
                autoComplete="current-password"
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                value={profile.FirstName}
                autoComplete="Ada Lovelace"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                value={profile.LastName}
                autoComplete="Ada Lovelace"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                type={profile.Phone}
                label="Phone"
                name="phone"
                value={"6173732130"}
                autoFocus
            />
            <Button
                onClick={() => handleSave({
                        Email: 'ss',
                        Password: '****',
                        FirstName: 'ss',
                        LastName: 'sss',
                        Phone: '+15456362198'
                    },
                    setProfileData,
                    setEditing)}
                fullWidth
                variant="contained"
                color="primary"
            >Save</Button>
        </form>
    )
}

export default EditableProfileData