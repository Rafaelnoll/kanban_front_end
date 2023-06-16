import styled, { css } from 'styled-components';

interface ButtonProps {
  transparent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, transparent }) => css`
    color: ${theme.color.white};
    background-color: ${transparent ? 'transparent' : theme.color.primary};
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
