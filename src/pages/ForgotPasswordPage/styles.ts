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
    background-color: ${theme.color.white};

    @media ${theme.media.tablet} {
      display: none;
    }
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.big};

    flex: 0.5;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: ${theme.spacing.large};

    @media ${theme.media.tablet} {
      flex: 1;
      max-width: 800px;
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

export const SmallText = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.small};
    text-align: center;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.small};
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
  `}
`;
