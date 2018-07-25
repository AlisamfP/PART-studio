import React, { Component } from 'react';
import logo from './partStudioLogo.png';
import { CssBaseline } from '@material-ui/core'
import BottomNav from './components/BottomNav.js';
import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className= {styles.body} >
        <CssBaseline />
        <div className = {styles.info} >
          <img src={logo} className={styles.logo} alt="logo" />

          <div className={styles.intro}>
            Lindsay makes art. You can buy it.
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }
}

export default App
