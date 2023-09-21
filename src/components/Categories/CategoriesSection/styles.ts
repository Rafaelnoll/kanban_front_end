import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.large};

    @media ${theme.media.tablet} {
      grid-template-columns: 1fr;
    }
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

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: ${theme.spacing.small};
  `}
`;

export const ButtonAdd = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};

    background-color: transparent;
    padding: ${theme.spacing.small};
    color: ${theme.color.primary};

    display: flex;
    border: ${theme.color.primary} 2px solid;
    border-radius: 8px;
    cursor: pointer;

    font-size: ${theme.size.medium};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
  `}
`;
