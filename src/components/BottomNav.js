import React, { Component } from 'react';

import { Etsy, Facebook, Instagram, Twitter } from 'mdi-material-ui'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

class BottomNav extends Component {
  handleChange = (event, value) => {
    window.open(value)
  }

  render() {
    return (
      <BottomNavigation
        showLabels
        onChange={this.handleChange} >
          <BottomNavigationAction
            icon = {<Etsy />}
            label = 'Etsy'
            value = "https://partstudio.etsy.com/"
          />
          <BottomNavigationAction
            icon = {<Instagram />}
            label = 'Instagram'
            value = "https://www.instagram.com/partstudio.az/"
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
