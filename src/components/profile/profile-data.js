import React from "react";
import {Card, CardHeader, CardContent} from "@material-ui/core";
import {FormControl, FormHelperText} from "@material-ui/core";
import {InputLabel, Input} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";

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
    }

    render() {

        // const classes = useStyles();

        return (
            <div className={"container"}>
                <Card style={{width: '100%'}}>
                    <CardHeader title={"Profile"}
                                avatar={<Avatar src={"src\\logo.svg"}/>}
                    />
                    <CardContent>
                        {/*<FormControl>*/}
                        {/*    <InputLabel htmlFor="my-input">Email address</InputLabel>*/}
                        {/*    <Input id="my-input" aria-describedby="my-helper-text"/>*/}
                        {/*    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>*/}
                        {/*</FormControl>*/}
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Edit
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link to = "/SignUp">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

}