import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    padding: ${theme.spacing.medium} ${theme.spacing.big};
    border: none;
    border-radius: 5px;
    font-size: ${theme.size.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
  `}
`;

export const Icon = styled.img``;

export const Text = styled.span``;
