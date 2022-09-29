import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from './Carousel';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Carousel cards={[1, 2, 3, 4, 5, 6]} cardHeight={364} />
  </React.StrictMode>
);
