import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 200px 1fr;

    @media ${theme.media.mobile} {
      height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr;
    }
  `}
`;
