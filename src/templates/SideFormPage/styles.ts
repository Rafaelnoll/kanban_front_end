import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;

    background-color: ${theme.color.white};

    @media ${theme.media.tablet} {
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.tablet} {
      display: none;
    }
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media ${theme.media.tablet} {
      max-width: 800px;
    }
  `}
`;

export const FormContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.big};

    padding: ${theme.spacing.large};
    background-color: ${theme.color.white};

    min-width: 80%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 16px;

    @media ${theme.media.mobile} {
      box-shadow: none;
    }
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.size.big};
    color: ${theme.color.text};
    font-weight: bold;
  `}
`;

export const FormHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};

    & > svg {
      color: ${theme.color.primary};
    }
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.size.big};
    color: ${theme.color.text_secondary};
    font-weight: bold;
  `}
`;

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
