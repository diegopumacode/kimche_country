import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #00a0e9;
    --color-bg: #F9F9F9;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: var(--color-bg);
  }
`;
export default GlobalStyle;
