import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.big};

    @media ${theme.media.tablet} {
      grid-template-columns: 1fr;
    }

    @media ${theme.media.large_screen} {
      gap: ${theme.spacing.large};
    }
  `}
`;

export const TopContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.medium};

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  `}
`;
