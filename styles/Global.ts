import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after, 
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 1em;
  }
`;
