import { handleActions, createAction } from "redux-actions";

const EDIT = "coursePerPage/EDIT";

export const changeCoursePerPage = createAction(EDIT);

const initialState = 20;

const coursePerPage = handleActions(
  {
    [EDIT]: (state, { payload: number }) => number,
  },
  initialState
);

export default coursePerPage;
