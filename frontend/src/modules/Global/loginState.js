import { handleActions, createAction } from "redux-actions";

const TOGGLE = "loginState/TOGGLE";

export const changeLoginState = createAction(TOGGLE);

const initialState = false;

const loginState = handleActions(
  {
    [TOGGLE]: (state) => !state,
  },
  initialState
);

export default loginState;
