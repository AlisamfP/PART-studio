import React, { Component } from 'react';

import { CssBaseline, Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Content from './components/Content.js';
import Painting from './components/Painting.js';
import BottomNav from './components/BottomNav.js';

import styles from './styles.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={styles.root}>
          <CssBaseline  />
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='space-between'
            className={styles.grid}
            spacing={24}
          >
            <Grid item x={12} > <Content /> </Grid>
            <Grid item x={12} > <Painting /> </Grid>
            <Grid item xs={12} className = {styles.social}> <BottomNav /> </Grid>
          </Grid>
        </div>
    </MuiThemeProvider>
    )
  }
}

export default App
