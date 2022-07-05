import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const initialState = {
  favorites: [],
  count: 0,
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export const store = createStore(
  storeReducer,
  composeWithDevTools(applyMiddleware())
);
