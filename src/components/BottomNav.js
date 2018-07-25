import React, { Component } from 'react';

import { Etsy, Facebook, Twitter } from 'mdi-material-ui'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'


class BottomNav extends Component {
  render() {
    return (
      <BottomNavigation showLabels >
          <BottomNavigationAction
            icon = {<Etsy />}
            label = 'Etsy'
            value = "https://partstudio.etsy.com/"
          />
          <BottomNavigationAction
            icon = {<Twitter />}
            label = 'Twitter'
            value="https://twitter.com/studio_part"
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
