import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    color: #424242;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100vh;
    min-width: 100vw;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .center-vertical {
    display: flex;
    align-items: center;
  }
`;
