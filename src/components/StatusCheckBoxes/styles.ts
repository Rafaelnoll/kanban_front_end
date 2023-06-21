import styled, { css } from 'styled-components';

interface LabelProps {
  ischecked: 'true' | 'false';
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.small};
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.color.text_secondary};
    font-size: ${theme.size.small};
  `}
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, ischecked }) => css`
    background-color: ${ischecked === 'true'
      ? theme.color.primary
      : theme.color.light_gray};
    color: ${ischecked === 'true' ? theme.color.white : theme.color.text};

    padding: ${theme.spacing.small};
    border-radius: 8px;
    cursor: pointer;
  `}
`;
