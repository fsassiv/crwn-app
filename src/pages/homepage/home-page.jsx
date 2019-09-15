import React from "react";
// import "./home-page.scss";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
