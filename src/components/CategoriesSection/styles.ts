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

export const Table = styled.table`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};
    border: solid 2px ${theme.color.light_gray};
    border-radius: 8px;

    width: 100%;

    & th {
      font-weight: bold;
      text-align: left;
      padding: ${theme.spacing.small};
      color: ${theme.color.text};
      background-color: ${theme.color.secondary};
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    & tr:nth-child(2n) {
      background-color: ${theme.color.secondary};
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

export const ActionButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};
  `}
`;

export const ActionButton = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacing.xsmall};
    border: none;
    background-color: transparent;
    cursor: pointer;

    & svg {
      color: ${theme.color.text};
    }
  `}
`;
