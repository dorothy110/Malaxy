//File Description for index.js
//index.js is a javascript file that combines the reducers for all the redux files
//Author: Min Chang Kim
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import loginState from "./Global/loginState";
import headerOpen from "./Global/headerOpen";
import courseInfoWindowOpen from "./Global/courseInfoWindowOpen";
import coursePerPage from "./CourseList/coursePerPage";
import userInfo from "./Global/userInfo";
import { enableES5 } from "immer";

enableES5();
//the root Reducer is the combination of all the different reducers used in the project
const rootReducer = combineReducers({
  loginState,
  headerOpen,
  courseInfoWindowOpen,
  coursePerPage,
  userInfo,
  // loading,
});

// export default rootReducer;
export default (state, action) =>
  rootReducer(action.type === "USER_LOGOUT" ? undefined : state, action);

//watcher saga. currently redux saga isn't being used
export function* rootSaga() {
  yield all([]);
}
