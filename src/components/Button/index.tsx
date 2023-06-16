import React from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: string;
  transparent?: 'false' | 'true';
  asLink?: boolean;
  href?: string;
}

function Button({
  text,
  icon = '',
  transparent = 'false',
  asLink = false,
  href = '',
}: ButtonProps) {
  return (
    <S.Button as={asLink ? 'a' : ''} href={href} transparent={transparent}>
      {icon && <S.Icon src={icon} />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
