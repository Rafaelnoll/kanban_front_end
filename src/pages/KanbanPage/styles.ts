import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    padding: ${theme.spacing.large};
    margin-top: ${theme.spacing.xsmall};
    border-top-left-radius: 32px;

    @media ${theme.media.mobile} {
      border-radius: 0;
      margin-top: 0;
      padding: ${theme.spacing.big};
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    align-items: center;

    @media ${theme.media.mobile} {
      & > svg {
        display: none;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: ${theme.spacing.medium};
  `}
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.big};
  `}
`;
