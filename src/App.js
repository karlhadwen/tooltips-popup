import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ToolTip, Popup } from './components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToolTip>
        <p>Hello tooltip</p>
      </ToolTip>
      <Popup>
        <p>Hello popup</p>
      </Popup>
    </>
  );
}
