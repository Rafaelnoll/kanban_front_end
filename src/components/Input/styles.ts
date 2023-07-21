import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    color: ${theme.color.text_dark};
    font-size: ${theme.size.small};
    width: 100%;

    padding: ${theme.spacing.medium} ${theme.spacing.small};
    border: 2px solid ${theme.color.light_gray};
    border-radius: 8px;

    &:focus {
      border-color: ${theme.color.primary};
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    border: none;
    color: ${theme.color.text_dark};
    font-size: ${theme.size.small};
    width: 100%;
    resize: none;

    padding: ${theme.spacing.medium} ${theme.spacing.small};
    border-radius: 8px;
  `}
`;
