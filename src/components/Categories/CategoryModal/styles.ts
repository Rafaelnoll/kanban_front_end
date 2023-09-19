import styled, { css, keyframes } from 'styled-components';

interface AnimatedComponent {
  $isLoading: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;
const scaleOut = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
  }
`;

const ButtonTemplate = styled.button`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding: ${theme.spacing.medium} ${theme.spacing.large};
    font-size: ${theme.size.medium};
    border-radius: 16px;
    border: none;
    cursor: pointer;
  `}
`;

export const Container = styled.div<AnimatedComponent>`
  ${({ theme, $isLoading }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    background: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${fadeIn} 0.3s;
    ${$isLoading &&
    css`
      animation: ${fadeOut} 0.3s forwards;
    `}

    @media ${theme.media.mobile} {
      padding: 0 ${theme.spacing.small};
    }
  `}
`;

export const ModalContainer = styled.div<AnimatedComponent>`
  ${({ theme, $isLoading }) => css`
    background-color: ${theme.color.bg_secondary};
    padding: ${theme.spacing.medium};

    width: 100%;
    max-width: 500px;
    border-radius: 8px;

    animation: ${scaleIn} 0.3s;
    ${$isLoading &&
    css`
      animation: ${scaleOut} 0.3s forwards;
    `}
  `}
`;

export const ModalHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: ${theme.color.text};
      cursor: pointer;
    }
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
  `}
`;

export const ModalForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    margin-top: ${theme.spacing.medium};
  `}
`;

export const FormFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    margin-top: ${theme.spacing.medium};

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text_error};
    font-size: ${theme.size.small};
  `}
`;

export const CancelButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.light_gray};
    color: ${theme.color.text_dark};
  `}
`;

export const SaveButton = styled(ButtonTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
  `}
`;
