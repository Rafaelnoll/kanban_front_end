import styled, { css } from 'styled-components';

export const TasksList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};

    @media ${theme.media.tablet} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media ${theme.media.large_screen} {
      flex-direction: row;
      flex-wrap: wrap;
    }
  `}
`;

export const Label = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
    padding: ${theme.spacing.medium} 0;
  `}
`;

export const TasksContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.large_screen} {
      flex: 1;
    }
  `}
`;

export const TasksContainerHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.size.big};
    gap: ${theme.spacing.small};

    svg {
      color: ${theme.color.text};
      cursor: pointer;

      &:hover {
        color: ${theme.color.primary};
        transition: color 0.5s;
      }
    }
  `}
`;

export const NoTasksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.medium};

    font-size: ${theme.size.medium};
    color: ${theme.color.text_secondary};
    flex: 1;
    padding: ${theme.spacing.big} 0;

    svg {
      color: ${theme.color.text_secondary};
    }
  `}
`;
