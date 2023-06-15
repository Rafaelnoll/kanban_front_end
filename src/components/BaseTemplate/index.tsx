import React, { ReactNode } from 'react';

import * as S from './styles';

interface BaseTemplateProps {
  children: ReactNode;
}

function BaseTemplate({ children }: BaseTemplateProps) {
  return <S.Container>{children}</S.Container>;
}

export default BaseTemplate;
