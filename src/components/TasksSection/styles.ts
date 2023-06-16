import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.large};
  `}
`;

export const Label = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
    padding: ${theme.spacing.medium} 0;
  `}
`;

export const TasksContainer = styled.div``;

export const TasksList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    margin-top: ${theme.spacing.medium};
  `}
`;
