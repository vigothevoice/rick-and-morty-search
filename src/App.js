import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { add, page } from "./reducer/index";
import styles from './app.module.scss';
/* get Character list*/
import { getCharacter } from "rickmortyapi";
/* import components */
import Header from "./ui/Header/Header";
import ItemsList from "./components/ItemsList/ItemsList";
import ItemSheet from "./components/ItemSheet/ItemSheet";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(null);
  const appCurrentPage = useSelector(state => state.pages.currentPage);
  const itemsList = useSelector(state => state.data);
  const itemSearched= useSelector(state => state.suggested.dataPreviousItem);


  // check if the user already looked for a chara
  const getItemsList = () => {
    if(itemSearched){
      // if there's already a serach result, show chara from the same species as the serched one
      const selectedSpecies = itemSearched.species;
      return { species: selectedSpecies}
    } else {
      // if no, display predefined pages
      return {page: appCurrentPage}
    }
  }


  useEffect(() => {
    if (isMountedRef.current === true) {
      setLoading(true);
    }

    // call api
    getCharacter( getItemsList() ).then(response => {
      // count pages and set current one
      dispatch(
        page({
          pages: {
            maxPages: response.info.pages,
            currentPage: appCurrentPage
          }
        })
      );

      // create array from response
      const getCharsArray = Object.values(response);
      // get array of single items
      const charItems = getCharsArray[1].map(item => {
        return {
          id: item.id,
          image: item.image,
          name: item.name,
          status: item.status
        };
      });

      // add fetched data to redux
      dispatch(add(charItems));
      setLoading(false);
    });
  }, [appCurrentPage]);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Router>
        {loading ? (
          <p className={loading}>Loading...</p>
        ) : (
          <div className={styles.innerWrapper}>
            <Switch>
              <Route exact path="/">
              <Header page=""></Header>
                <Search></Search>
                <ItemsList/>
                {/* hide pagination for no-result search */}
                {itemsList ? <Pagination/> : ''}
              </Route>
              {/* pass clicked id to single item component */}
              <Route path="/:id" component={ItemSheet}>
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
