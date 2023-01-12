import { handleActions, createAction } from "redux-actions";

const TOGGLE = "headerOpen/TOGGLE";

export const changeHeaderOpen = createAction(TOGGLE);

const initialState = true;

const headerOpen = handleActions(
  {
    [TOGGLE]: (state) => !state,
    //or you can do something like
    // [TOGGLE]: (state, { payload: bool }) => bool,
  },
  initialState
);

export default headerOpen;
