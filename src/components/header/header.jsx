import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

// import { auth } from "../../firebase/firebase.util";

// import "./header.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

//currentUser is passed from mapStatoToProps
const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink className="option" to="/shop">
          Shop
        </OptionLink>
        <OptionLink className="option" to="/contact">
          Contact
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SignOut
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SignIn</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropDown />}
    </HeaderContainer>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
