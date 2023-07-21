import styled, { css } from 'styled-components';

interface SwitchProps {
  istoggle: 'true' | 'false';
}

export const Container = styled.div``;

export const SwitchBall = styled.div`
  ${({ theme }) => css`
    position: absolute;

    width: 25px;
    height: 25px;
    background-color: ${theme.color.white};
    border-radius: 50px;
    left: 4px;
    transition: left 0.2s ease-in-out;
  `}
`;

export const Switch = styled.div<SwitchProps>`
  ${({ theme, istoggle }) => css`
    position: relative;

    background-color: ${istoggle === 'true'
      ? theme.color.primary
      : theme.color.secondary};
    border-radius: 50px;
    width: 70px;
    height: 31px;

    display: flex;
    align-items: center;

    padding: ${theme.spacing.xsmall};
    cursor: pointer;
    transition: background-color 0.2s;

    & > ${SwitchBall} {
      left: ${istoggle === 'true' ? '41px' : '4px'};
    }
  `}
`;
