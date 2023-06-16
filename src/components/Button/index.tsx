import React from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: string;
  transparent?: boolean;
}

function Button({ text, icon, transparent, ...props }: ButtonProps) {
  return (
    <S.Button transparent={transparent} {...props}>
      {icon && <S.Icon src={icon} />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
