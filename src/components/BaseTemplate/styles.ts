import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 200px 1fr;

    @media ${theme.media.mobile} {
      grid-template-columns: 1fr;
    }
  `}
`;
