import React, { useState } from 'react';

import * as S from './styles';

interface ToggleSwitchProps {
  defaultToggle?: boolean;
}

function ToggleSwitch({ defaultToggle = false }: ToggleSwitchProps) {
  const [isToggle, setIsToggle] = useState(defaultToggle);

  function handleToogle() {
    setIsToggle((prevState) => !prevState);
  }

  return (
    <S.Container>
      <S.Switch onClick={handleToogle} istoggle={isToggle ? 'true' : 'false'}>
        <S.SwitchBall />
      </S.Switch>
    </S.Container>
  );
}

export default ToggleSwitch;
