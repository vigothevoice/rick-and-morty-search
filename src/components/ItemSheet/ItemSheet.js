import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacter } from "rickmortyapi";
import { isEmpty } from "lodash";
import styles from "./itemSheet.module.scss";

import { selectedItem, searchHistory } from "../../reducer/index";
import Header from '../../ui/Header/Header';
import ItemIntro from "../ItemIntro/ItemIntro";
import ItemGeneralInfo from "../ItemGeneralInfo/ItemGeneralInfo";
import ItemLocation from "../ItemLocation/ItemLocation";
import ItemEpisodes from "../ItemEpisodes/ItemEpisodes";

const ItemSheet = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(null);
  const getData = useSelector(state => state.selectedItem);
  const history = useSelector(state => state.suggested.history);

  useEffect(() => {
    dispatch(selectedItem({}));
    // call api
    // check that passed id correspond to match id
    const id = parseInt(match.params.id);
    getCharacter(id).then(response => {
      dispatch(selectedItem(response));
      console.log(response)

      if (history === true) {
        dispatch(searchHistory({ history, dataPreviousItem: response }));
      }
    });

    setLoading(false);
  }, []);

  return (
    <>
    <Header page={"inner"}></Header>
    <div className={styles.wrapper}>
      <Link to="/"><p className={styles.goback}> Back</p></Link>
      {loading || isEmpty(getData) ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <>
          <ItemIntro
            name={getData.name}
            status={getData.status}
            imgUrl={getData.image}
          />
          <ItemGeneralInfo
            species={getData.species}
            type={getData.type}
            gender={getData.gender}
          />
          <ItemLocation
            origin={getData.origin.name}
            location={getData.location.location}
          />
          {Array.isArray(getData.episode) && !isEmpty(getData.episode) && (
            <ItemEpisodes episodes={getData.episode} />
          )}
        </>
      )}
    </div>
    </>
  );
};

export default ItemSheet;
