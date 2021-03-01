import React from "react";
import {TextField, Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

const EditableProfileData = () => {
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
                value={"adalovelace@gmail.com"}
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
                value={"password"}
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
                value={"Ada"}
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
                value={"Lovelace"}
                autoComplete="Ada Lovelace"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                type={"phone"}
                label="Phone"
                name="phone"
                value={"6173732130"}
                autoFocus
            />
            <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                    <Link to="/SignUp">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default EditableProfileData