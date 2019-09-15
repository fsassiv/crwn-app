import React from "react";
// import "./custom-button.scss";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = props => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
