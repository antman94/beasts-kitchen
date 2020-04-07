import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SimpleReactValidator from 'simple-react-validator';

import withStyles from './HOCS/withStyles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Beasts Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({autoForceUpdate: this});

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value});
    e.preventDefault();
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value});
    e.preventDefault();
  }

  navigateToSavedRecipesScreen = () => {
    if (this.validator.allValid()) {
      this.props.history.push('/savedrecipes')
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.logInForm} component="main" maxWidth="xs">
        <CssBaseline /> 
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography className={classes.LogInTitle} component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.LogInFormInput}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleEmail}
                />
                {this.validator.message(
                  'email', 
                  this.state.email, 
                  'required|email', 
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.LogInFormInput}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handlePassword}
                />
                {this.validator.message(
                  'password', 
                  this.state.password, 
                  'required|min:8', 
                )}
              </Grid>
              
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.navigateToSavedRecipesScreen}
            >
              Log in
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  You don't have an account? Register here!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
  
}

export default withStyles(LogIn);