import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import painting from '../images/painting.jpg'
import styles from '../styles.css'

class Painting extends Component {
  render() {
    return (
      <Grid item xs={12} className={styles.paintingContainer} >
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://www.etsy.com/listing/632941271/dark-seascape-18x24-bob-ross-inspired?ref=shop_home_active_7">
            <img src={painting} className={styles.painting} alt="painting" />
        </a>
      </Grid>
    );
  }
};

export default Painting
