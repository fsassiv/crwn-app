import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";
import { MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, linkUrl, size, match, history }) => {
	return (
		<MenuItemContainer
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
			size={size}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
