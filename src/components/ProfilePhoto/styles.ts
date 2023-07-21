import styled, { css } from 'styled-components';

export const IconContainerTemplate = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.bg_secondary};
    padding: ${theme.spacing.xsmall};

    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 50%;

    display: flex;
    cursor: pointer;
  `}
`;

export const Container = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ConfigContainer = styled(IconContainerTemplate)`
  ${({ theme }) => css`
    bottom: 0;
    right: -5px;

    & > svg {
      color: ${theme.color.text};
    }

    &:hover > svg {
      color: ${theme.color.secondary};
    }
  `}
`;

export const LogoutContainer = styled(IconContainerTemplate)`
  ${({ theme }) => css`
    bottom: 0;
    left: -5px;

    & > svg {
      color: ${theme.color.text};
    }

    &:hover > svg {
      color: ${theme.color.text_error};
    }
  `}
`;
