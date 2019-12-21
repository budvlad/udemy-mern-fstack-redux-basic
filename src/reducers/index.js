import { combineReducers } from "redux";

import movies from "./movies_reducer";
import directors from "./directors_reducer";

const rootReducer = combineReducers({
  movies,
  directors
});

export default rootReducer;
