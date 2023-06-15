import React from 'react';

import * as S from './styles';

import Logo from '../../assets/logo.svg';

function SideMenu() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoImage src={Logo as unknown as string} />
      </S.Content>
    </S.Container>
  );
}

export default SideMenu;
