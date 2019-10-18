import styled from "styled-components";

export const MenuItemContainer = styled.div`
	min-width: 30%;
	height: ${({ size }) => (size ? "380px" : "240px")};
	-webkit-box-flex: 1;
	-ms-flex: 1 1 auto;
	flex: 1 1 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
	&.large {
		height: 380px;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;
