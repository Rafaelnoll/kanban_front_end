import React, { useState } from 'react';

import * as S from './styles';

interface ToggleSwitchProps {
  defaultToggle?: boolean;
  handleClick: () => void;
}

function ToggleSwitch({
  defaultToggle = false,
  handleClick,
}: ToggleSwitchProps) {
  const [isToggle, setIsToggle] = useState(defaultToggle);

  function handleToogle() {
    setIsToggle((prevState) => !prevState);
    handleClick();
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
