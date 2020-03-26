import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "lodash";
import { episodesItem } from "../../reducer/index";
import styles from './itemEpisodes.module.scss';

const ItemEpisodes = props => {
  const arrayEpisodes = props.episodes;
  const [loading, setLoading] = useState(true);
  const [episodeData, setEpisodeData] = useState([]);
  const getData = useSelector(state => state.episodes);

  const resolveData = promises => {
    return new Promise((resolve, reject) =>
      Promise.all(promises).then(res => resolve(res))
    );
  };

  useEffect(() => {
    resolveData(
      arrayEpisodes.map(episode => {
        return fetch(episode)
          .then(response => response.json())
          .catch(error => error);
      })
    ).then(res => setEpisodeData(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Episodes</h2>
      {Array.isArray(episodeData) &&
        episodeData.map(episode => 
          <ul>
            <li>{episode.episode}</li>
            <li>{episode.name}</li>
          </ul>
          )
      }
    </div>
  );
};

export default ItemEpisodes;
