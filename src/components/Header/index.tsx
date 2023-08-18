import React from 'react';

import * as S from './styles';
import Title from '../Title';
import ProfilePhoto from '../ProfilePhoto';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Header>
      <S.TitleContainer>
        <Title>{title}</Title>
      </S.TitleContainer>

      <ProfilePhoto />
    </S.Header>
  );
}
