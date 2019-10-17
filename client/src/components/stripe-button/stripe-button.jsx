import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_hltUtgYF7bKGHRZjmxIULL6V00q93AFyvh";

	const onToken = token => {
		axios({
			url: "payment",
			method: "POST",
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(res => {
				console.log(res);
				alert("Payment successful");
			})
			.catch(err => {
				console.error("Payment error", JSON.parse(err));
				alert("There was an issue with your payment");
			});
	};

	return (
		<StripeCheckout
			label="Pay now"
			name="CRWN Clouthing LTd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
