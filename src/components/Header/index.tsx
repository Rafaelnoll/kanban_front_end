import React from 'react';

import * as S from './styles';
import Title from '../Title';
import ProfilePhoto from '../ProfilePhoto';

import useAuthentication from '../../hooks/useAuthentication';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { user } = useAuthentication();

  return (
    <S.Header>
      <S.TitleContainer>
        <Title>{title}</Title>
      </S.TitleContainer>

      <ProfilePhoto image_path={user?.image_path} />
    </S.Header>
  );
}
