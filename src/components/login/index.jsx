import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import get from 'lodash.get';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { getAuth } from '../../actions/user';

function Login(props) {
  const { getAuth, user, history } = props;
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (get(user, 'user')) {
      history.push("/");
    }
  }, [user]);

  async function onFormSubmit(e) {
    e.preventDefault();
    getAuth(email, password);
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} lg={5} className={classes.root}>
        <form noValidate onSubmit={onFormSubmit}>
          <Typography variant="h1" className={classes.title}>Reactify</Typography>
          <div>
            <TextField
              id="email" label="Email" variant="outlined" className={classes.email}
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <TextField id="password" type="password" label="Password" variant="outlined" className={classes.password}
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button variant="contained" color="primary" type="submit" disableElevation disabled={!password || !email}>
            Login
          </Button>
        </form>
      </Grid>
    </Grid>

  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.current,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAuth: (email, password) => dispatch(getAuth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);