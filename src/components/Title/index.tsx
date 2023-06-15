import styled, { css } from 'styled-components';

export default styled.h1`
  ${({ theme }) => css`
    color: ${theme.color.text}
    font-weight: bold;
    font-size: ${theme.size.large};
  `}
`;
