import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
  `}
`;

export const FormLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    align-self: flex-end;
    font-size: ${theme.size.small};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.size.small};
    color: ${theme.color.text_secondary};
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text_error};
    font-size: ${theme.size.small};
  `}
`;

export const Separator = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
    border: solid 1px rgba(0, 0, 0, 0.3);
  `}
`;

export const SmallText = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.small};
    text-align: center;
  `}
`;
