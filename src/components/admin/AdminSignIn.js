import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../search-bar.component';
import FooterComponent from "../footer.component";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
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

export default function AdminSignIn() {
    const classes = useStyles();

    function adminlogin(){
        console.log("Admin logged in")
    }

    return (
    <div>
            <Container component="main" maxWidth="xs">

<SearchAppBar />

  <CssBaseline />
  <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
         Admin Sign in
      </Typography>
      <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="current-password"
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>adminlogin()}
          >
              Sign In
          </Button>
      </form>
  </div>
 
</Container> <FooterComponent />
    </div>
    );
}