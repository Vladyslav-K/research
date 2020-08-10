import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

// material-ui components
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// styles
import styles from './styles';

const Header = ({ classes }) => (
  <Grid component='header' container justify='center' className={classes.header}>
    <Grid container justify='space-around' alignItems='center' className={classes.container}>
      <Grid item>
        <NavLink exact to='/' className={classes.link} activeClassName={classes.activeLink}>
          Simple form
        </NavLink>
      </Grid>

      <Grid item>
        <NavLink exact to='/field-array' className={classes.link} activeClassName={classes.activeLink}>
          Field array
        </NavLink>
      </Grid>

      <Grid item>
        <NavLink exact to='/high-performance-form' className={classes.link} activeClassName={classes.activeLink}>
          High performance form
        </NavLink>
      </Grid>
    </Grid>
  </Grid>
);

export default memo(withStyles(styles)(Header));
