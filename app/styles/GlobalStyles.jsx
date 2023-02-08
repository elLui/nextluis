import { createGlobalStyle } from "styled-components";

// Create a new GlobalStyle component using the styled-components library
const GlobalStyle = createGlobalStyle`
  /* Define the color scheme for the entire application */
  :root {
    /* Marries high-tech with modern colorful street art */
    --color-primary: #FF69B4; /* Hot Pink */
    --color-primary-dark: #FF1493; /* Deep Pink */
    --color-secondary: #00BFFF; /* Deep Sky Blue */
    --color-grey-light-1: #F0F8FF; /* Alice Blue */
    --color-grey-light-2: #ADD8E6; /* Light Blue */
    --color-grey-dark-1: #7FFFD4; /* Aquamarine */
    --color-grey-dark-2: #7CFC00; /* Lawn Green */

    /* Define the font variables */
    --font-primary: 'Nunito', sans-serif;
    --font-display: 'Josefin Sans', sans-serif;

    /* Define the responsive breakpoints */
    --bp-largest: 75em; /* 1200px */
    --bp-large: 62.5em; /* 1000px */
    --bp-medium: 50em; /* 800px */
    --bp-small: 37.5em; /* 600px */
  }

  /* Reset default styles for the html and body elements */
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    position: relative;
  }

  /* Remove the default list-style for unordered lists */
  ul {
    list-style: none;
  }

  /* Remove the underline for links and set the text color to inherit from parent */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Ensure that all elements have consistent box-sizing */
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
