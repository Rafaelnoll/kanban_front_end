import React, { FunctionComponent } from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>> | null;
  transparent?: 'false' | 'true';
  responsive?: 'false' | 'true';
  link?: string;
}

function Button({
  text,
  icon: Icon = null,
  transparent = 'false',
  link = '',
  responsive = 'false',
}: ButtonProps) {
  return (
    <S.Button
      responsive={responsive}
      as={link ? 'a' : ''}
      href={link}
      transparent={transparent}
    >
      {Icon && <Icon />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
