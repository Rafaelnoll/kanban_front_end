import styled, { css } from 'styled-components';

const ButtonsTemplate = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacing.small};
    border: none;
    border-radius: 8px;
    cursor: pointer;
  `}
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};

    & > td {
      padding: ${theme.spacing.medium};
      color: ${theme.color.text};
      max-width: 50px;

      @media ${theme.media.mobile} {
        text-align: center;
      }
    }

    & > .category_name {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`;

export const ActionButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
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

export const CancelButton = styled(ButtonsTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.light_gray};
    color: ${theme.color.text_dark};
  `}
`;

export const DeleteButton = styled(ButtonsTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.red};
    color: ${theme.color.white};
  `}
`;
