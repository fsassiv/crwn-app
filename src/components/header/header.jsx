import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

import { auth } from "../../firebase/firebase.util";

import "./header.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

//currentUser is passed from mapStatoToProps
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  );
};

// const mapStateToProps = ({
//   userReducer: { currentUser },
//   cartReducer: { hidden }
// }) => ({
//   // state is passed to the <Provider>
//   currentUser,
//   hidden
// });

// crateStructuredSelector - pass the state automatically for each selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
