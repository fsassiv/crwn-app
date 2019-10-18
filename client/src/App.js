import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//actions
// import { setCurrentUser } from "./redux/user/user.actions";

// import "./App.css";
import { GlobalStyle } from "./global.styles";
// import HomePage from "./pages/homepage/home-page";

// import ShopPage from "./pages/shop/shop-page";
// import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header";
import ErrorBoundery from "./components/error-boundery/error-boundery";
// import SignInAndSignUp from "./pages/signin-signup/signin-signup";

// import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner";

const HomePage = lazy(() => import("./pages/homepage/home-page"));
const ShopPage = lazy(() => import("./pages/shop/shop-page"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));
const SignInAndSignUp = lazy(() =>
	import("./pages/signin-signup/signin-signup")
);
// const ShopPage = lazy(() => import("./pages/shop/shop-page"));

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundery>
					<Suspense fallback={<Spinner />}>
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
					</Suspense>
				</ErrorBoundery>
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
