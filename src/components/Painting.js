import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import painting from '../images/painting.jpg'
import styles from '../styles.css'

class Paintings extends Component {
  render() {
    return (
      <Grid item xs={12} className={styles.paintingContainer} >
        <img src={painting} className={styles.painting} alt="painting" />
      </Grid>
    );
  }
};

export default Paintings
