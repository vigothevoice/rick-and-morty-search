import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './itemsList.module.scss';
/* import single Item */
import Item from "../Item/Item";

const ItemsList = () => {

const itemsList = useSelector(state => state.data);
const itemSearched= useSelector(state => state.suggested.dataPreviousItem);


if (itemsList) {
  return (
    <>
    {/* if there's history, look for similar items */}
    {itemSearched ? <h1 className={styles.title}>You might be interested in those people</h1> 
    // if no history, display predefined items list
    : <h1 className={styles.title}>Character list</h1>}
        <div className={styles.wrapper}>
        {itemsList.map(item => (
        <Link to={`/${item.id}`}>
          <Item
            key={item.id}
            alt={item.name}
            image={item.image}
            itemName={item.name}
            status={item.status}
          />
          </Link>
        )) }
        </div>
        </>
  )}
  else {
    // if no result for the search
    return <p className={styles.noresult}>No sign of intelligent life here! :( </p>
    }
};

export default ItemsList;
