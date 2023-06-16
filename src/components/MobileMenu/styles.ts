import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;

    @media ${theme.media.not_mobile} {
      display: none;
    }
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    padding: ${theme.spacing.medium};

    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.small};

    &:hover {
      background-color: ${theme.color.secondary};
    }

    & svg {
      color: ${theme.color.primary};
    }

    transition: background-color 0.5s;
  `}
`;

export const Icon = styled.img``;

export const ButtonsContainer = styled.div`
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  display: flex;
  justify-content: center;

  ${MenuLink}:first-child {
    border-top-left-radius: 32px;
  }

  ${MenuLink}:last-child {
    border-top-right-radius: 32px;
  }

  ${MenuLink}:only-child {
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
  }
`;
