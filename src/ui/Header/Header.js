import React from "react";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

const Header = props => {
  const getHeaderHigh = () => {
    if (props.page === "") {
      return styles.wrapper;
    } else {
      return styles.wrapperInner;
    }
  };

  const getHeaderLogo = () => {
    if (props.page === "") {
      return <a href="/"><Logo /></a>;
    } else {
      return;
    }
  };

  return (
    <div className={getHeaderHigh()}>
      <div className={styles.logo}>{getHeaderLogo()}</div>
    </div>
  );
};

export default Header;
