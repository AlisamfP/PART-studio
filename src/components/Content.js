import React, { Component } from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'
import logo from '../images/partStudioLogo.png'

import styles from '../styles.css'

class Content extends Component {
  render() {
    return (
        <Paper className={styles.card} >
          <Grid
            item
            xs={12}
            className={styles.logoContainer}
          >
            <img src={logo} className={styles.logo} alt="logo" />
          </Grid>

          <Grid item xs={12} className={styles.infoContainer} >
            <Typography variant='display1' gutterBottom align='center'>
              Providing happy accidents to your life.
            </Typography>
            <Typography variant='title' gutterBottom align='center'>
              This website is currently under construction. Check back for updates!
            </Typography>
          </Grid>
        </Paper>
    );
  }
};

export default Content
