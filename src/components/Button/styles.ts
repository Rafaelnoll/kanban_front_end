import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  transparent?: 'false' | 'true';
  responsive?: 'false' | 'true';
}

export const Text = styled.span``;

export const StyledLink = styled(Link)<ButtonProps>`
  ${({ theme, transparent, as, responsive }) => css`
    font-size: ${theme.size.medium};
    color: ${theme.color.white};
    background-color: ${transparent === 'true'
      ? 'transparent'
      : theme.color.primary};

    padding: ${theme.spacing.medium} ${as ? 0 : theme.spacing.big};
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: ${as ? 'none' : 'center'};
    gap: ${as ? theme.spacing.medium : '8px'};

    cursor: pointer;

    @media ${theme.media.mobile} {
      padding: ${theme.spacing.medium}
        ${responsive === 'true' ? theme.spacing.medium : theme.spacing.big};

      & ${Text} {
        display: ${responsive === 'true' ? 'none' : 'block'};
      }
    }
  `}
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, transparent, as, responsive }) => css`
    font-size: ${theme.size.medium};
    color: ${theme.color.white};
    background-color: ${transparent === 'true'
      ? 'transparent'
      : theme.color.primary};

    padding: ${theme.spacing.medium} ${as ? 0 : theme.spacing.big};
    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: ${as ? 'none' : 'center'};
    gap: ${as ? theme.spacing.medium : '8px'};

    cursor: pointer;

    &:disabled {
      color: ${theme.color.text_dark};
      background-color: ${transparent === 'true'
        ? 'transparent'
        : theme.color.light_gray};
      cursor: not-allowed;
    }

    @media ${theme.media.mobile} {
      padding: ${theme.spacing.medium}
        ${responsive === 'true' ? theme.spacing.medium : theme.spacing.big};

      & ${Text} {
        display: ${responsive === 'true' ? 'none' : 'block'};
      }
    }
  `}
`;

export const Icon = styled.img``;
