//File Description for userInfo.js
//userInfo.js is a javascript file that utilizes redux in the ducks format to stores the current user's information
//Author: Min Chang Kim
import { handleActions, createAction } from "redux-actions";

const UPDATE = "userInfo/UPDATE";

export const updateUserInfo = createAction(UPDATE);

const initialState = "";

const userInfo = handleActions(
  {
    [UPDATE]: (state, { payload: info }) => info,
  },
  initialState
);

export default userInfo;
