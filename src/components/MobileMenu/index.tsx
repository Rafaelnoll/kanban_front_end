import React from 'react';
import routes from '../../routes';

import * as S from './styles';

function MobileMenu() {
  return (
    <S.Container>
      <S.ButtonsContainer>
        {routes.map(({ name, icon: Icon, path }) => (
          <S.MenuLink key={name} to={path}>
            {Icon && <Icon />}
            {name}
          </S.MenuLink>
        ))}
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default MobileMenu;
