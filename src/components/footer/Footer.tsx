import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["site-footer"]}>
        &copy; Casserole All rights reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
