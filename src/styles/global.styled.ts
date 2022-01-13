import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 ${normalize}
 
 body {
  font-family:'Spoqa Han Sans Neo', 'Helvetica Neue', helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  body *,
  body *::before,
  body *::after {
    -webkit-tap-highlight-color: rgba(250 250 0 / 2%);
    box-sizing: border-box;
  }

  img, svg {
    vertical-align: middle;
  }

  [disabled] {
    cursor: not-allowed;
  }
  
  button {
    cursor: pointer;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  abbr[title] {
    cursor: help;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

 a {
   text-decoration: none;
   color:inherit;
 }
`;
