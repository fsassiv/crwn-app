import { createSelector } from "reselect";

//input selector
const selectUser = state => state.userReducer;

//Output selector
export const selectCurrentUser = createSelector(
  [selectUser],
  userReducer => userReducer.currentUser
);
