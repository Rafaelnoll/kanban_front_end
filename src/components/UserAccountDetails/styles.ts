import styled, { css } from 'styled-components';

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

export const AccountDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.small};
    margin-bottom: ${theme.spacing.big};
    max-width: 300px;
  `}
`;
