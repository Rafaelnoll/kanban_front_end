import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.big};
    align-items: center;
  `}
`;

export const ChangeThemeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.medium};
    margin-left: ${theme.spacing.big};
    margin-top: ${theme.spacing.medium};
  `}
`;

export const ChangeThemeText = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.medium};
  `}
`;
