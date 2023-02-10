import { createGlobalStyle } from "styled-components";

// Create a new GlobalStyle component using the styled-components library
const GlobalStyle = createGlobalStyle`
  :root {

    --color-primary: #000;
    --color-secondary: #555;
    --color-tertiary: #999;
    --color-success: #0F0;
    --color-error: #F00;
    --color-warning: #FF0;
    --color-info: #0FF;
    --color-background: #FFF;
    --color-text: #333;

    --width: 100px;
    --min-width: 50px;
    --max-width: 200px;
    --height: 100px;
    --min-height: 50px;
    --max-height: 200px;

    --border-width: 1px;
    --border-radius: 5px;
    --border-color: #000;

    --padding: 10px;
    --margin: 10px;

    --font-size: 16px;
    --font-family: Arial, sans-serif;
    --font-weight: bold;
    --line-height: 1.5;

    --box-shadow: 2px 2px 5px #333;
    --text-shadow: 1px 1px #333;

    --transition: all 0.5s ease;
    --transition-duration: 0.5s;
    --transition-timing-function: ease;

    --display: flex;
    --flex-direction: row;
    --flex-wrap: wrap;
    --justify-content: center;
    --align-items: center;

    --position: absolute;
    --top: 0;
    --bottom: 0;
    --left: 0;
    --right: 0;
    --z-index: 1;

    --background-color: #FFF;
    --background-image: url(bg.jpg);
    --background-repeat: no-repeat;
    --background-position: center center;

    

    
    

    
    
  }
  
  
  
`;

export default GlobalStyle;
