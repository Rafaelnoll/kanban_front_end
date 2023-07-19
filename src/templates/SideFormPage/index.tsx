import React from 'react';

import * as S from './styles';
import KanbanImage from '../../assets/login-kanban.svg';
import LogoIcon from '../../assets/logo.svg';

interface SideFormPageProps {
  title: string;
  children: React.ReactNode;
}

export function SideFormPage({ title, children }: SideFormPageProps) {
  return (
    <S.Container>
      <S.ImageContainer>
        <KanbanImage />
      </S.ImageContainer>

      <S.FormContainer>
        <S.FormHeader>
          <LogoIcon />
          <S.Text>Kanban</S.Text>
        </S.FormHeader>

        <S.Title>{title}</S.Title>

        {children}
      </S.FormContainer>
    </S.Container>
  );
}
