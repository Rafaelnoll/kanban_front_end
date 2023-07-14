import styled, { css } from 'styled-components';

const ButtonTemplate = styled.button`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    font-size: ${theme.size.medium};
    border-radius: 8px;
    border: none;
    cursor: pointer;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    padding: ${theme.spacing.large};
    margin-top: 3px;
    border-top-left-radius: 32px;

    @media ${theme.media.mobile} {
      border-radius: 0;
      margin-top: 0;
      padding: ${theme.spacing.big};
    }
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.big};

    display: grid;
    grid-template-columns: 0.8fr 1fr;

    @media ${theme.media.tablet} {
      grid-template-columns: 1fr;
      gap: ${theme.spacing.large};
    }
  `}
`;

export const AccountDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${theme.spacing.big};
    border-right: 2px solid ${theme.color.secondary};

    @media ${theme.media.tablet} {
      border: none;
    }
  `}
`;

export const AccountText = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.big};
  `}
`;

export const AccountPhoto = styled.img`
  ${({ theme }) => css`
    width: 128px;
    height: 128px;
    object-fit: cover;

    border: 3px solid ${theme.color.primary};
    border-radius: 50%;
  `}
`;

export const AccountInfos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AccountName = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
    font-weight: bold;
  `}
`;

export const AccountEmail = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.medium};
    margin-bottom: ${theme.spacing.big};
  `}
`;

export const FormHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacing.big};

    @media ${theme.media.mobile} {
      flex-direction: column;
      text-align: center;
      gap: ${theme.spacing.medium};
    }
  `}
`;

export const ActionButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
  `}
`;

export const FormTitle = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
  `}
`;

export const CancelButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.light_gray};
    color: ${theme.color.text};
  `}
`;

export const SaveButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
  `}
`;

export const Separator = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
    border: solid 1px rgba(0, 0, 0, 0.1);
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: 0 ${theme.spacing.large};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};

    & > textarea {
      border: 2px solid ${theme.color.light_gray};
      height: 100px;
    }
  `}
`;

export const FieldsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
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
