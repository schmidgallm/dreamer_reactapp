import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import useStyles from './useStyles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={() => console.log('hello')}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor='left' children='hello'>
          hello
        </Drawer>
        <Typography variant='h6' className={classes.title}>
          Dreamers Publishing
        </Typography>
        <Button href='/register' color='inherit'>
          Register
        </Button>
        <Button href='/login' color='inherit'>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
