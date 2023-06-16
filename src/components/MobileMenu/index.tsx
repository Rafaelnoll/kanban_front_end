import React from 'react';

import * as S from './styles';

function MobileMenu() {
  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.MenuLink href="#">Boards</S.MenuLink>
        <S.MenuLink href="#">Other</S.MenuLink>
      </S.ButtonsContainer>
    </S.Container>
  );
}

export default MobileMenu;
