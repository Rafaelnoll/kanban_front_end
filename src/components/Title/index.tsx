import styled, { css } from 'styled-components';

export default styled.h1`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-weight: bold;
    font-size: ${theme.size.large};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;
