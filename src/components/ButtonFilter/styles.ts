import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ListItem = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.medium} ${theme.spacing.big};
    cursor: pointer;
    color: ${theme.color.text};
    font-size: ${theme.size.small};

    &:hover {
      background-color: ${theme.color.secondary};
    }
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.white};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 998;
    left: 0;
    border-radius: 8px;
    margin-top: ${theme.spacing.xsmall};
    width: 100%;

    ${ListItem} {
      border-top: solid 1px ${theme.color.light_gray};
    }

    ${ListItem}:first-child, ${ListItem}:only-child {
      border: none;
    }

    ${ListItem}:first-child {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    ${ListItem}:last-child {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  `}
`;
