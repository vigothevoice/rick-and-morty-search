import React from "react";
import Emoji from "../../ui/Emoji/Emoji";
import styles from "./item.module.scss";

const Item = props => {
  const checkStatus = () => {
    if (props.status === "Alive") {
      return <Emoji symbol="👌" />;
    }
    if (props.status === "Death") {
      return <Emoji symbol="💀" />;
    } else {
      return <Emoji symbol="❔" />;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h2 className={styles.name}>{props.itemName}</h2>
      <p className={styles.status}>
        Status: {checkStatus()}
      </p>
    </div>
  );
};

export default Item;
