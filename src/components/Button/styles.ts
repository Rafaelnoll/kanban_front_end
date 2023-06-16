import styled, { css } from 'styled-components';

interface ButtonProps {
  transparent?: boolean;
}

export const Text = styled.span``;

export const Button = styled.button<ButtonProps>`
  ${({ theme, transparent, as }) => css`
    color: ${theme.color.white};
    background-color: ${transparent ? 'transparent' : theme.color.primary};
    padding: ${theme.spacing.medium} ${as ? 0 : theme.spacing.big};
    border: none;
    border-radius: 5px;
    font-size: ${theme.size.medium};
    display: flex;
    align-items: center;
    justify-content: ${as ? 'none' : 'center'};
    gap: ${as ? theme.spacing.medium : '8px'};
    cursor: pointer;
  `}
`;

export const Icon = styled.img``;
