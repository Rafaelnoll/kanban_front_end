import React, { FunctionComponent } from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>> | null;
  transparent?: 'false' | 'true';
  asLink?: boolean;
  href?: string;
}

function Button({
  text,
  icon: Icon = null,
  transparent = 'false',
  asLink = false,
  href = '',
}: ButtonProps) {
  return (
    <S.Button as={asLink ? 'a' : ''} href={href} transparent={transparent}>
      {Icon && <Icon />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
