import React, { useState, setTimeout, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { page } from "../../reducer/index";
import style from "./pagination.module.scss";

const Pagination = props => {
  const dispatch = useDispatch();
  const numberPages = useSelector(state => state.pages.maxPages);
  const currentPage = useSelector(state => state.pages.currentPage);

  const handleClick = (e, i) => {
    dispatch(
      page({
        pages: {
          currentPage: i,
          maxPages: numberPages
        }
      })
    );
  };

  const createPagination = () => {
    let pagesList = [];

    for (let i = 1; i < numberPages + 1; i++) {
      if (i === currentPage) {
        pagesList.push(
          <a
            style={{ backgroundColor: "#EA73C5", color: "#ffffff", fontWeight: 700}}
            href="#"
            onClick={e => handleClick(e, i)}
            key={i}
          >
            {i}
          </a>
        );
      } else {
        pagesList.push(
          <a
            href="#"
            onClick={e => handleClick(e, i)}
            key={i}
          >
            {i}
          </a>
        );
      }
    }

    return pagesList;
  };

  return <div className={style.wrapper}>{createPagination()}</div>;
};

export default Pagination;
