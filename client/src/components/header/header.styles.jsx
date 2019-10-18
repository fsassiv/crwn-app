import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   text-transform: uppercase;
//   color: black;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-bottom: 25px;
	@media screen and(max-width:800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
	@media screen and(max-width:800px) {
		width: 50px;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	text-transform: uppercase;
	color: black;
	cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
