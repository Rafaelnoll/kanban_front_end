import React, { FunctionComponent } from 'react';

import * as S from './styles';

interface ButtonProps {
  text: string;
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>> | null;
  transparent?: 'false' | 'true';
  responsive?: 'false' | 'true';
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

function Button({
  text,
  icon: Icon = null,
  transparent = 'false',
  link = '',
  responsive = 'false',
  type = 'button',
  handleClick,
}: ButtonProps) {
  if (link) {
    return (
      <S.StyledLink
        responsive={responsive}
        transparent={transparent}
        type={type}
        to={link}
      >
        {Icon && <Icon />}
        <S.Text>{text}</S.Text>
      </S.StyledLink>
    );
  }

  return (
    <S.Button
      onClick={handleClick}
      responsive={responsive}
      transparent={transparent}
      type={type}
    >
      {Icon && <Icon />}
      <S.Text>{text}</S.Text>
    </S.Button>
  );
}

export default Button;
