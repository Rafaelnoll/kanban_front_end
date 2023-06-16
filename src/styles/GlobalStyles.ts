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

    html > body {
      ${({ theme }) => css`
        background-color: ${theme.color.primary};
      `}
    }

    textarea:focus, input:focus {
      outline: none;
    }

    a {
      text-decoration: none;
    }
`;

export default GlobalStyles;
