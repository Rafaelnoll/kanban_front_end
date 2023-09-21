import styled, { css } from 'styled-components';

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;

    & th {
      font-weight: bold;
      text-align: left;
      padding: ${theme.spacing.small};
      color: ${theme.color.text};

      text-align: center;
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    & tr {
      border: 1px solid ${theme.color.primary};
      border-radius: 8px;
      border-left: medium none;
      border-right: medium none;
      text-align: center;
    }
  `}
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};
    text-align: center;

    & > td {
      padding: ${theme.spacing.small};
      color: ${theme.color.text};
      background-color: red;
    }
  `}
`;
