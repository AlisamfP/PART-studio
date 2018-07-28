import React, { Component } from 'react';

import { Etsy, Facebook, Twitter } from 'mdi-material-ui'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import styles from '../styles.css'

class BottomNav extends Component {
  handleChange = (event, value) => {
    window.open(value)
  }

  render() {
    return (
      <BottomNavigation
        showLabels
        onChange={this.handleChange}
        className = {styles.social} >
          <BottomNavigationAction
            icon = {<Etsy />}
            label = 'Etsy'
            value = "https://partstudio.etsy.com/"
          />
          <BottomNavigationAction
            icon = {<Twitter />}
            label = 'Twitter'
            value="https://twitter.com/palsonartstudio"
          />
          <BottomNavigationAction
            icon = {<Facebook />}
            label = 'Facebook'
            value="https://www.facebook.com/partstudio.az"
          />
      </BottomNavigation>
    );
  }
};

export default BottomNav
