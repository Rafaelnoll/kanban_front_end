import styled, { css, keyframes } from 'styled-components';

type TypeInScreen = 'true' | 'false';

interface ContainerProps {
  inscreen: TypeInScreen;
}

const showInScreen = keyframes`
  to {
    right: 0;
  }
`;

const exitOfScreen = (from: string, to: string) => {
  return keyframes`
  from {
    right: ${from};
  }
  to {
    right: ${to};
  }
`;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, inscreen }) => css`
    position: fixed;
    right: -35vw;
    top: 0;
    z-index: 988;

    background-color: ${theme.color.background};
    box-shadow: ${theme.color.shadow_box};
    width: 35vw;
    height: 100%;
    padding: ${theme.spacing.medium};
    animation: ${inscreen === 'true'
        ? showInScreen
        : exitOfScreen('0', '-35vw')}
      0.3s ease-in-out ${inscreen === 'true' ? 'forwards' : 'none'};

    @media ${theme.media.mobile} {
      right: -100%;
      width: 100%;
      padding: ${theme.spacing.medium};

      animation: ${inscreen === 'true'
          ? showInScreen
          : exitOfScreen('0', '-100vw')}
        0.3s ease-in-out ${inscreen === 'true' ? 'forwards' : 'none'};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

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

    height: 100%;
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

export const Description = styled.textarea`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    color: ${theme.color.text};
    font-size: ${theme.size.medium};

    overflow: hidden;
    border: none;

    margin-top: ${theme.spacing.medium};
    width: 100%;
    height: 100%;
  `}
`;
