import React, { Component } from 'react';

import { Grid, Paper, Typography } from '@material-ui/core'
import logo from '../partStudioLogo.png'

import styles from '../styles.css'

class Content extends Component {
  render() {
    return (
      <Grid
        container
        spacing = {16}
        justify = 'center'
        alignItems = 'center'
        className = {styles.container} >

        <Paper className = {styles.card} >
          <Grid
            item
            sm={6}
            xs={12}
            className = {styles.logoContainer} >
            <img src={logo} className={styles.logo} alt="logo" />
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            className= {styles.infoContainer}>

            <Typography variant='title'>
              Lindsay makes art. You can buy it.
            </Typography>

          </Grid>
        </Paper>

      </Grid>
    );
  }
};

export default Content
