import React, { Component } from 'react';
import logo from './partStudioLogo.png';
import { Paper, CssBaseline, Grid, Typography } from '@material-ui/core'
import BottomNav from './components/BottomNav.js';
import styles from './styles.css';

class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        <CssBaseline  />
        <Grid
          container
          spacing = {24}
          direction = 'row'
          alignItems = 'center'
          className = {styles.container} >
            <Paper className = {styles.card} >
              <Grid item xs={4}>
                <img src={logo} className={styles.logo} alt="logo" />
              </Grid>
              <Grid item xs={12}>
                <Typography varient='Headline'>
                  Lindsay makes art. You can buy it.
                </Typography>
              </Grid>
            </Paper>
        </Grid>
        <BottomNav />
      </div>
    )
  }
}

export default App
