import styled, { css } from 'styled-components';

interface DetailsInfosProps {
  showingcontent: 'true' | 'false';
}

export const Details = styled.div`
  width: 100%;
`;

export const DetailsInfos = styled.div<DetailsInfosProps>`
  ${({ theme, showingcontent }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};

    color: ${theme.color.text_secondary};
    cursor: pointer;

    & > svg {
      transform: ${showingcontent === 'true' ? 'rotate(90deg)' : 'none'};
      transition: transform 0.2s ease-out;
    }
  `}
`;

export const DetailsContent = styled.div``;

export const DetailsTitle = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.size.big};
  `}
`;
