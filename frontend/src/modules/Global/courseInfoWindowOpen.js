import { handleActions, createAction } from "redux-actions";

const TOGGLE = "blockBackgroundOpen/TOGGLE";

export const changeCourseInfoWindowOpen = createAction(TOGGLE);

const initialState = false;

const courseInfoWindowOpen = handleActions(
  {
    // [TOGGLE]: (state, { payload: bool }) => bool,
    //or you can do something like
    [TOGGLE]: (state) => !state,
  },
  initialState
);

export default courseInfoWindowOpen;
