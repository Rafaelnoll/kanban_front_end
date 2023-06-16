import React from 'react';
import routes from '../../routes';

import * as S from './styles';

function MobileMenu() {
  return (
    <S.Container>
      <S.ButtonsContainer>
        {routes.map((route) => (
          <S.MenuLink key={route.name} href={route.path}>
            {route.name}
          </S.MenuLink>
        ))}
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default MobileMenu;
