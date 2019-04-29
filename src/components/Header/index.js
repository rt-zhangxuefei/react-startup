import React, { Component } from 'react';
import styles from './index.module.less';

class Header extends Component {
  state = {};
  render() {
    return (
      <h3 className={styles.header}>React-Startup {process.env.NODE_ENV}</h3>
    );
  }
}

export default Header;
