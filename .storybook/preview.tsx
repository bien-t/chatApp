import { createGlobalStyle } from 'styled-components';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, Roboto,'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #1B1C1D;
    padding:0;
    margin:0;
  }

  #__next{
    display: flex;
    flex-direction: column;
    height:100vh;
  }
`;

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle];