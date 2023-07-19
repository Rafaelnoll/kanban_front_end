import styled, { css } from 'styled-components';

interface IconContainerProps {
  selected: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const ListItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};

    padding: ${theme.spacing.medium};
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.secondary};
    }
  `}
`;

export const ListItemText = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.small};

    flex: 1;
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
    min-width: 100%;

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

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme, selected }) => css`
    & > svg {
      opacity: ${selected ? 1 : 0};
      color: ${theme.color.primary};
    }
  `}
`;
