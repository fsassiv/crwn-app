import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 80px;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  @media screen and(max-width:800px){
    padding:10px
  }
}

a {
  text-decoration: none;
}

`;
