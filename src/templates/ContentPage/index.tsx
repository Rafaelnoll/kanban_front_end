import React from 'react';

import * as S from './styles';
import MobileMenu from '../../components/MobileMenu';
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';
import HelpButton from '../../components/HelpButton';

interface ContentPageProps {
  title: string;
  children: React.ReactNode;
}

export function ContentPage({ title, children }: ContentPageProps) {
  return (
    <S.Container>
      <SideMenu />

      <MobileMenu />

      <S.Content>
        <Header title={title} />

        <S.MainContent>{children}</S.MainContent>
      </S.Content>
      <HelpButton />
    </S.Container>
  );
}
