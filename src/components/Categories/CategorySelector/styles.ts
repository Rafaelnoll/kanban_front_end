import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};

    background-color: ${theme.color.white};
    padding: ${theme.spacing.medium} ${theme.spacing.small};
    border: 2px solid ${theme.color.light_gray};
    border-radius: 8px;

    svg {
      color: ${theme.color.text_dark};
    }
  `}
`;

export const Selector = styled.select`
  ${({ theme }) => css`
    border: none;
    width: 100%;

    color: ${theme.color.text_dark};
    font-size: ${theme.size.small};
    background-color: ${theme.color.white};
  `}
`;

export const Option = styled.option``;
