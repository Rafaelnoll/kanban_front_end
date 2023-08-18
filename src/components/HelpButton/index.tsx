import React from 'react';

import * as S from './styles';
import HelpIcon from '../../assets/help-icon.svg';

export default function HelpButton() {
  return (
    <S.Container>
      <S.HelpTextContainer>
        <S.HelpText>
          Você está atualmente no modo de teste. Para explorar todas as
          funcionalidades completas, por favor, acesse o site principal.
        </S.HelpText>
      </S.HelpTextContainer>
      <HelpIcon />
    </S.Container>
  );
}
