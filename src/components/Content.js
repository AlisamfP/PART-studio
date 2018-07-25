import React, { Component } from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'
import logo from '../partStudioLogo.png'
import painting from '../painting.jpg'

import styles from '../styles.css'

class Content extends Component {
  render() {
    return (
      <Grid
        container
        spacing={8}
        justify='center'
        alignItems='center'
        className={styles.container} >

        <Paper className={styles.card} >
          <Grid item xs={12} className={styles.logoContainer} >
            <img src={logo} className={styles.logo} alt="logo" />
          </Grid>

          <Grid item xs={12} className={styles.infoContainer} >
            <Typography variant='title' gutterBottom align='center'>
              Providing happy accidents to your life.
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.paintingContainer} >
            <img src={painting} className={styles.painting} alt="painting" />
          </Grid>
        </Paper>

      </Grid>
    );
  }
};

export default Content
