import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: ${theme.color.white};
    padding: ${theme.spacing.large};
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.large};
    margin-bottom: ${theme.spacing.medium};
  `}
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
    text-align: center;
  `}
`;

export const ImageContainer = styled.div`
  & > svg {
    width: 100%;
  }
`;

export const GoBackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.small};
    font-size: ${theme.size.big};

    border: none;
    color: ${theme.color.white};
    background-color: ${theme.color.primary};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: 8px;
    cursor: pointer;
  `}
`;
