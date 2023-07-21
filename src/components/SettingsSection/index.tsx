import React from 'react';

import * as S from './styles';
import Details from '../Details';
import ToggleSwitch from '../ToggleSwitch';
import useMyTheme from '../../hooks/useMyTheme';

function SettingsSection() {
  const { currentTheme, changeTheme } = useMyTheme();

  return (
    <S.Container>
      <Details title="Tema">
        <S.ChangeThemeContainer>
          <S.ChangeThemeText>Modo Dark</S.ChangeThemeText>
          <ToggleSwitch
            defaultToggle={currentTheme === 'dark'}
            handleClick={changeTheme}
          />
        </S.ChangeThemeContainer>
      </Details>
    </S.Container>
  );
}

export default SettingsSection;
