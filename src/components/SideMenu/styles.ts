import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    height: 100vh;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.large};
  `}
`;

export const LogoImage = styled.img``;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.large};
  `}
`;
