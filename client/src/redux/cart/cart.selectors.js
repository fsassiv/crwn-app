import { createSelector } from "reselect";

//Input selector
const selectCart = state => state.cartReducer;

//Output selector
export const selectCartItems = createSelector(
  //[recebe], retorna ()=>
  [selectCart],
  cartReducer => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((preVal, cartItem) => preVal + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (preVal, cartItem) => preVal + cartItem.price * cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cartReducer => cartReducer.hidden
);
