import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after, 
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    cursor: none;
  }

  html {
    font-size: calc(.4em + 1vw);
  }

  body, input, input::placeholder, textarea {
    font-family: 'Noto Sans';
  }

  input:focus, textarea:focus {
    outline-color: ${props => props.theme.secondary1};
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: white;
    color: #263238;
  }
`;
