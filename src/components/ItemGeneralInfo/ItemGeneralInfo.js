import React from "react";
import styles from "./itemGeneralInfo.module.scss";
import Emoji from "../../ui/Emoji/Emoji";

const ItemGeneralInfo = (props) => {

  const checkGender = () => {
    if ( props.gender === "Male") {
      return <Emoji symbol="♂"/>
    } if (  props.gender === "Female") {
      return <Emoji symbol="♀"/>      
    } else {
      return  <Emoji symbol="❔"/>    
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2>General info</h2>
      <ul>
        <li>Species</li>
        <li>{props.species}</li>
      </ul>
      <ul>
        <li>Type</li>
        <li>{props.type}</li>
      </ul>
      <ul  style={{alignItems: "center"}}>
        <li>Gender</li>
        <li style={{ fontSize: "2em"}}>{checkGender()}</li>
      </ul>
    </div>
  );
};

export default ItemGeneralInfo;
