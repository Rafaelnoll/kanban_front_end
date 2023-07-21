import React from 'react';

import * as S from './styles';
import Details from '../Details';
import ToggleSwitch from '../ToggleSwitch';

function SettingsSection() {
  return (
    <S.Container>
      <Details title="Tema">
        <S.ChangeThemeContainer>
          <S.ChangeThemeText>Modo Dark</S.ChangeThemeText>
          <ToggleSwitch />
        </S.ChangeThemeContainer>
      </Details>
    </S.Container>
  );
}

export default SettingsSection;
