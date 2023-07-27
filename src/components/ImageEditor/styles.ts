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
    background-color: ${theme.color.bg_secondary};
    padding: ${theme.spacing.medium};

    width: 100%;
    max-width: 500px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
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

export const AvatarEditorContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.small};

    margin: ${theme.spacing.medium} 0;
    border-radius: 8px;
  `}
`;

export const ModalFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    margin-top: ${theme.spacing.small};

    @media ${theme.media.mobile} {
      flex-direction: column-reverse;
    }
  `}
`;

export const ZoomRangeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.small};
  `}
`;

export const ZoomRangeInput = styled.input.attrs({ type: 'range' })`
  ${({ theme }) => css`
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;

    &::-webkit-slider-runnable-track {
      background: ${theme.color.secondary};
      width: 100%;
      height: 16px;
      border-radius: 8px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;

      height: 100%;
      width: 16px;
      background-color: ${theme.color.primary};
      border-radius: 50%;
      border: 2px solid ${theme.color.white};
      box-shadow: -407px 0 0 400px ${theme.color.primary};
    }

    /* Track: Mozilla Firefox */
    &::-moz-range-track {
      background: ${theme.color.primary};
      height: 16px;
      border-radius: 8px;
    }

    &::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: ${theme.color.primary};
      border-radius: 50%;
      border: 2px solid ${theme.color.white};
      box-shadow: -407px 0 0 400px ${theme.color.primary};
    }
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.medium};
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
