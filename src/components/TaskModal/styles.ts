import styled, { css } from 'styled-components';

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

export const Container = styled.div`
  ${({ theme }) => css`
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

    @media ${theme.media.mobile} {
      padding: 0 ${theme.spacing.small};
    }
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    padding: ${theme.spacing.medium};

    width: 100%;
    max-width: 500px;
    border-radius: 8px;
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

export const ModalBody = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};
    margin: ${theme.spacing.medium} 0;
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
  `}
`;

export const ModalFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
    }
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
