import React, { memo } from "react";
import styles from "./index.module.less";

function Header() {
  return <h3 className={styles.header}>React-Startup</h3>;
}

export default memo(Header);
