import React from 'react';
import get from 'lodash.get';

// material ui
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Avatar from '../avatar';
import useStyles from './styles';

function MyAppBar({handleDrawerToggle, user}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
        </Typography>
        <Avatar url={get(user, 'avatar.url')} />
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar;
