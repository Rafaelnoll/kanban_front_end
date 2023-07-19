import React from 'react';

import * as S from './styles';
import Title from '../Title';
import ProfilePhoto from '../ProfilePhoto';

import PenIcon from '../../assets/pen-icon.svg';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Header>
      <S.TitleContainer>
        <Title>{title}</Title>
        <PenIcon />
      </S.TitleContainer>

      <ProfilePhoto />
    </S.Header>
  );
}
