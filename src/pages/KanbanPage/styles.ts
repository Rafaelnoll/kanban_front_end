import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    padding: ${theme.spacing.large};
    margin-top: 3px;
    border-top-left-radius: 32px;

    @media ${theme.media.mobile} {
      border-radius: 0;
      margin-top: 0;
      padding: ${theme.spacing.big};
    }
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.big};
  `}
`;

export const TopContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.medium};
  `}
`;
