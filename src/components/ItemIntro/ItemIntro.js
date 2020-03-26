import React from "react";
import styles from "./itemIntro.module.scss";

const ItemIntro = props => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${props.imgUrl})` }}
      ></div>
      <h1 className={styles.name}>{props.name}</h1>
      <h4 className={styles.status}>{props.status}</h4>
    </div>
  );
};

export default ItemIntro;
