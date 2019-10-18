import React from "react";

class ErrorBoundery extends React.Component {
	constructor() {
		super();

		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error) {
		console.error(error);
	}

	render() {
		if (this.state.hasError) {
			return <div>Something went wrong</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundery;
