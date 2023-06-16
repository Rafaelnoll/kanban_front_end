import React from 'react';

import routes from '../../routes';
import * as S from './styles';

import Logo from '../../assets/logo.svg';

import Button from '../Button';

function SideMenu() {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.ButtonsContainer>
          {routes.map((route) => (
            <Button
              key={route.name}
              link={route.path}
              transparent="true"
              text={route.name}
              icon={route.icon}
            />
          ))}
        </S.ButtonsContainer>
      </S.Content>
    </S.Container>
  );
}

export default SideMenu;
