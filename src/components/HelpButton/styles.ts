import styled, { css } from 'styled-components';

export const HelpTextContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: none;

    right: 32px;
    bottom: 4em;

    background-color: ${theme.color.primary};
    border-radius: 8px;
    padding: ${theme.spacing.small};
    color: ${theme.color.white};

    max-width: 250px;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: 16px;
    bottom: 16px;
    background-color: ${theme.color.primary};
    padding: ${theme.spacing.small};
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    display: flex;
    cursor: pointer;

    & > svg {
      color: ${theme.color.white};
    }

    &:hover ${HelpTextContainer} {
      display: block;
    }
  `}
`;

export const HelpText = styled.p``;
