import React from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: string;
}

function Button({ text, icon, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      {icon && <S.Icon src={icon} />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
