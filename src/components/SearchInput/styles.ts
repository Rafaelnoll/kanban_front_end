import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};
    padding: ${theme.spacing.medium};

    width: 100%;

    background-color: ${theme.color.white};
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);
    border-radius: 8px;
    cursor: text;
  `}
`;

export const Icon = styled.img``;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;

    color: ${theme.color.text};
    font-size: ${theme.size.medium};
    border: none;
  `}
`;
