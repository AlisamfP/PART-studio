import React, { Component } from 'react';

import { CssBaseline } from '@material-ui/core'
import Content from './components/Content.js';
import BottomNav from './components/BottomNav.js';

import styles from './styles.css';

import logo from './partStudioLogo.png';
class App extends Component {

  render() {
    return (
      <div className={styles.root}>
        <CssBaseline  />
        <Content />
        <BottomNav />
      </div>
    )
  }
}

export default App
