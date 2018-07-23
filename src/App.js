import React, { Component } from 'react';
import logo from './partStudioLogo.png';
import styles from './styles.css';

class App extends Component {
  render() {
    console.log(logo)
    return (
      <div className = {styles.body} >
        <div className = {styles.header} >
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className = {styles.title}>PART Studio</h1>
        </div>

        <p className={styles.intro}>
          Lindsay makes art. You can buy it.
        </p>
        <div>
          <div className={styles.social}>
            <a href="https://partstudio.etsy.com/">Etsy shop</a>
          </div>
          <div className={styles.social}>
            <a href="https://twitter.com/studio_part">Twitter</a>
          </div>
          <div className={styles.social}>
            <a href="https://facebook.com/">Facebook</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
