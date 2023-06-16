import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    box-shadow: 0px 4px 16px #eae2fd;
    border-radius: 8px;
    padding: ${theme.spacing.big};

    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    max-width: 400px;

    @media ${theme.media.tablet} {
      flex: 1;
    }
  `}
`;

export const TaskTitle = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.size.medium};
    font-weight: 700;
    color: ${theme.color.text};
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
    font-size: ${theme.size.medium};
    color: ${theme.color.text_secondary};
  `}
`;

export const CategoryContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};
    overflow: hidden;
  `}
`;

export const Category = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    background-color: ${theme.color.secondary};
    font-size: ${theme.size.small};
    border-radius: 8px;
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  `}
`;
