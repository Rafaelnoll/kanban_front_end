import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 988;

    background-color: ${theme.color.background};
    box-shadow: ${theme.color.shadow_box};
    width: 35vw;
    height: 100%;
    padding: ${theme.spacing.medium};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.medium};

    svg {
      color: ${theme.color.text};
      cursor: pointer;
    }
  `}
`;

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.big};
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.medium};
  `}
`;

export const DetailContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};
  `}
`;

export const Status = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};
    background-color: ${theme.color.primary};
    color: ${theme.color.white};

    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
    border-radius: 8px;
  `}
`;

export const CategoryName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};
    background-color: ${theme.color.secondary};
    color: ${theme.color.primary};

    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
    border-radius: 8px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.medium};
  `}
`;
