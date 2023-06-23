import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: 100vh;

    @media ${theme.media.mobile} {
      height: auto;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: fixed;
    margin: ${theme.spacing.large};

    @media ${theme.media.mobile} {
      position: static;
    }
  `}
`;

export const LogoImage = styled.img``;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.large};

    @media ${theme.media.mobile} {
      display: none;
    }
  `}
`;
