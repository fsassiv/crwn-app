import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//actions
// import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

import HomePage from "./pages/homepage/home-page";
import ShopPage from "./pages/shop/shop-page";
import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";

// import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
					}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	//dispatch trigger actions
	// first setCurrentUser is the name to be set in the props
	// second setCUrrentUser is the action to be dispatched
	// setCurrentUser: user => dispatch(setCurrentUser(user))
	//dispatch(setCurrentUser(user)) is the same as
	// dispatch({
	//   type:"SET_CURRENT_USER",
	//   payload:user
	// })
	checkUserSession: () => dispatch(checkUserSession())
});

//connect(mapStateToProps, mapDispatchToPropr,mergeProps,options)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);