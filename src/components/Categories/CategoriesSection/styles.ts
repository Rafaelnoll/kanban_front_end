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

export const Table = styled.table`
  ${({ theme }) => css`
    border: solid 2px ${theme.color.light_gray};
    border-radius: 8px;

    width: 100%;

    & th {
      font-weight: bold;
      text-align: left;
      padding: ${theme.spacing.small};
      color: ${theme.color.text};
      background-color: ${theme.color.bg_tertiary};

      @media ${theme.media.mobile} {
        text-align: center;
      }
    }

    & th:first-child {
      border-top-left-radius: 6px;
    }

    & th:last-child {
      border-top-right-radius: 6px;
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    & tr:nth-child(2n) {
      background-color: ${theme.color.bg_tertiary};
    }

    & tr:last-child {
      & td:first-child {
        border-bottom-left-radius: 6px;
      }
      & td:last-child {
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};

    & > td {
      padding: ${theme.spacing.small};
      color: ${theme.color.text};
    }
  `}
`;
