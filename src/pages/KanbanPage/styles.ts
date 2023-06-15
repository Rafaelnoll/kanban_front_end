import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    margin: ${theme.spacing.large};
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

export const Image = styled.img``;
