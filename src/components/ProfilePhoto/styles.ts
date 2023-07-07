import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ConfigContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.white};
    padding: ${theme.spacing.xsmall};

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 50%;
    bottom: 0;
    right: -5px;

    display: flex;
    cursor: pointer;

    & > svg {
      color: ${theme.color.text};
    }

    &:hover > svg {
      color: ${theme.color.primary};
    }
  `}
`;
