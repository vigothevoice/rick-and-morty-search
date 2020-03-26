import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/* get Character from rem */
import { getCharacter } from "rickmortyapi";
import styles from "./search.module.scss";
/* import actions from store */
import { searchItem, searchHistory } from "../../reducer/index";

const Search = props => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const dataPreviousItem = useSelector(state => state.suggested.dataPreviousItem)

  const handleChange = e => {
    setSearchTerm(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    getCharacter({
        name: searchTerm
      }).then(response => {
        dispatch(searchItem(response));
      });

    dispatch(searchHistory({history: true, dataPreviousItem}));
    document.getElementById("search").reset()
  };

  return (
    <form id="search" className={styles.form}>
      <input placeholder="search" onChange={e => handleChange(e)} className={styles.input}/>
      <button type="submit" onClick={e => handleSubmit(e)}>Search!</button>
    </form>
  );
};

export default Search;
