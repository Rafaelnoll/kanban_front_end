import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.medium};

    display: flex;
    justify-content: center;
    gap: ${theme.spacing.medium};
  `}
`;

export const Buttom = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;

    padding: ${theme.spacing.small};

    color: ${theme.color.text};
    border: 2px ${theme.color.text_dark} solid;
    border-radius: 8px;
    background-color: transparent;

    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }
  `}
`;

export const PageNumber = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.color.white};
    font-size: ${theme.size.medium};
    width: 32px;

    font-weight: bold;
    color: ${theme.color.primary};
    border: 2px ${theme.color.primary} solid;

    border-radius: 8px;
    background-color: transparent;
    padding: ${theme.spacing.small};
  `}
`;

export const PageNumberContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: ${theme.spacing.small};

    & ${PageNumber}:first-child {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    }

    & ${PageNumber}:last-child {
      color: ${theme.color.text};
    }

    span {
      color: ${theme.color.text};
    }
  `}
`;
