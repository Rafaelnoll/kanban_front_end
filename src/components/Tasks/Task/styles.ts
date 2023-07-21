import styled, { css } from 'styled-components';

const ButtonsTemplate = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 100px;
    font-size: ${theme.size.medium};
    border: none;
    border-radius: 8px;
    cursor: pointer;

    padding: ${theme.spacing.small};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.bg_secondary};
    box-shadow: ${theme.color.shadow_box};
    border-radius: 8px;
    padding: ${theme.spacing.big};
    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.medium};
    max-width: 400px;

    @media ${theme.media.tablet} {
      flex: 1;
    }
  `}
`;

export const TaskHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.small};
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

export const TaskActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};

    svg {
      color: ${theme.color.text};
      cursor: pointer;
    }
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

export const ModalDeleteContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.color.bg_secondary};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: ${theme.spacing.big};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.big};

    @media ${theme.media.mobile} {
      padding: ${theme.spacing.small};
      gap: ${theme.spacing.small};
      text-align: center;
    }
  `}
`;

export const ModalDeleteText = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text};
    font-size: ${theme.size.big};
  `}
`;

export const ModalDeleteActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.medium};
    justify-content: center;
    align-items: center;

    @media ${theme.media.mobile} {
      gap: ${theme.spacing.xsmall};
      width: 100%;
    }
  `}
`;

export const CancelButton = styled(ButtonsTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.light_gray};
    color: ${theme.color.text_dark};
  `}
`;

export const DeleteButton = styled(ButtonsTemplate)`
  ${({ theme }) => css`
    background-color: ${theme.color.red};
    color: ${theme.color.white};
  `}
`;
