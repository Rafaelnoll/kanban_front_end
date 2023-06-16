import React from 'react';

import * as S from './styles';
import Logo from '../../assets/logo.svg';
import BoardsIcon from '../../assets/board-icon.svg';

import Button from '../Button';

function SideMenu() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoImage src={Logo as unknown as string} />

        <S.ButtonsContainer>
          <Button
            asLink
            transparent="true"
            href="#"
            text="Boards"
            icon={BoardsIcon as unknown as string}
          />
        </S.ButtonsContainer>
      </S.Content>
    </S.Container>
  );
}

export default SideMenu;
