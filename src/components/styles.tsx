import { css, createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import 'resources/css/opensans.css';

const additional = css`
  :root {
    --white: #ffffff;
    --black: #000000;
    --twitter: #1da1f2;
    --nuke: #ffff00;
    --green: #009a3a;
    --red: #c41932;
  }
  html {
    direction: ${(props) => props.theme.direction};
    font-size: 62.5%;
    font-family: ${(props) => props.theme.defaultFont};
    * {
      font-family: inherit;
      outline: none;
      text-decoration: none;
    }
  }
  a {
    color: inherit;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes signal {
    0% {
      opacity: 1;
      transform: scale(0.3);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

/* eslint-disable prettier/prettier */

const GlobalStyles = createGlobalStyle`
  ${additional}
`;

export default GlobalStyles;
