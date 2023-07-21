import styled, { css } from 'styled-components';

interface SelectedProp {
  selected: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const ListItem = styled.div<SelectedProp>`
  ${({ theme, selected }) => css`
    display: flex;
    gap: ${theme.spacing.small};

    background-color: ${selected ? theme.color.secondary : 'none'};
    padding: ${theme.spacing.medium};
    cursor: pointer;

    &:hover {
      background-color: ${theme.color.secondary};
    }
  `}
`;

export const ListItemText = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text_dark};
    font-size: ${theme.size.small};

    flex: 1;
  `}
`;

export const List = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.white};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

export const IconContainer = styled.div<SelectedProp>`
  ${({ theme, selected }) => css`
    & > svg {
      opacity: ${selected ? 1 : 0};
      color: ${theme.color.primary};
    }
  `}
`;
