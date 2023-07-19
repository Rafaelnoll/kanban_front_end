import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    align-items: center;

    @media ${theme.media.mobile} {
      & > svg {
        display: none;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: ${theme.spacing.medium};
  `}
`;
