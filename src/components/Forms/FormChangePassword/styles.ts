import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonTemplate = styled.button`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: ${theme.spacing.medium} ${theme.spacing.large};
    font-size: ${theme.size.medium};
    border-radius: 16px;
    border: none;
    cursor: pointer;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    margin: ${theme.spacing.medium} 0;
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

export const FormFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    margin-top: ${theme.spacing.medium};

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
    }
  `}
`;

export const CancelButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.light_gray};
    color: ${theme.color.text_dark};
  `}
`;

export const SaveButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
  `}
`;
