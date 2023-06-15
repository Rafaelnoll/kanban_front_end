import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
      font-family: 'Inter', sans-serif;
    }

    body {
      ${({ theme }) => css`
        background-color: ${theme.color.primary};
      `}
    }
`;

export default GlobalStyles;
