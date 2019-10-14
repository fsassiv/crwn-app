import React, { useState } from "react";
import { connect } from "react-redux";
import "./signup.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../redux/user/user.actions";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const handleSubmit = async e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = userCredentials;

		if (password !== confirmPassword) {
			alert("Passwords dont match");
			return;
		}

		signUpStart({ email, password, displayName });
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const { displayName, email, password, confirmPassword } = userCredentials;

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and passowrd</span>

			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					handleChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
	null,
	mapDispatchToProps
)(SignUp);
