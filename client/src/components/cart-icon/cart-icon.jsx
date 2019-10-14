import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./cart-icon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  // let cartQuantity = cartItems.reduce(
  //   (preVal, cartItem) => preVal + cartItem.quantity,
  //   0
  // );
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />

      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // cartItems: cartReducer.cartItems
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = disptach => ({
  toggleCartHidden: () => disptach(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
