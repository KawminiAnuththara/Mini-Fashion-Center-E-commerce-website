import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    line-height: 1.6; /* Improves readability */
    background-color: #fff; /* Optional: Add a default background color */
    color: #333; /* Optional: Add a default text color */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal; /* Optional: Reset heading font weight */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
