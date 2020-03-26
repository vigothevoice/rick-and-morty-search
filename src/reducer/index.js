import { createSlice } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "reducer",
  initialState: {
      pages: {
        maxPages: "",
        currentPage: 1
      },
      selectedItem: {
          origin: "",
          location: "",
          episode: []
      },
      episodes: "",
      suggested: {
        history: false,
        dataPreviousItem: 0
      }
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        data: action.payload
      };
    },
    searchItem: (state, action, suggested) => {
      return {
        ...state,
        data: action.payload.results,
      };
    },
    page: (state, action) => {
      return {
        ...state,
        pages: {
          maxPages: action.payload.pages.maxPages,
          currentPage: action.payload.pages.currentPage
        }
      };
    },
    selectedItem: (state, action) => {
        return {
            ...state,
            selectedItem: action.payload
        }
    },
    episodesItem: (state,action) => {
        return {
            ...state,
            episodes: [action.payload]
        }
    },
    searchHistory: (state,action) => {
      return {
          ...state,
          suggested: action.payload
      }
  }
  }
});

export const { add, searchItem, page, selectedItem, episodesItem, searchHistory } = rootReducer.actions;
export default rootReducer;
