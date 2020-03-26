import React from "react";
import styles from './itemLocation.module.scss';

const ItemLocation = (props) => {

  return (
    <div className={styles.wrapper}>
        <h2>Location</h2>
        <ul>
            <li>Origin</li>
            <li>{props.origin}</li>
        </ul>
        <ul>
            <li>Last seen on</li>
            <li>{props.location}</li>
        </ul>
    </div>
  );
};

export default ItemLocation;
