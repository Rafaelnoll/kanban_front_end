import styled, { css } from 'styled-components';

export const TaskActionsContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    svg {
      color: ${theme.color.text_secondary};
      cursor: pointer;
    }
  `}
`;

export const Action = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};
    background-color: transparent;

    color: ${theme.color.text_dark};
    padding: ${theme.spacing.small};
    font-size: ${theme.size.xsmall};

    &:hover {
      background-color: ${theme.color.secondary};
    }

    svg {
      color: ${theme.color.text_dark};
    }
  `}
`;

export const TaskActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    position: absolute;
    left: 0;
    z-index: 2;
    border-radius: 8px;
    min-width: 100%;

    background-color: ${theme.color.white};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    & ${Action}:first-child {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    & ${Action}:last-child {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  `}
`;
