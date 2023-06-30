import styled, { css } from 'styled-components';

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
