import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';

import Title from '../../components/Title';
import ProfilePhoto from '../../components/ProfilePhoto';
import TasksSection from '../../components/TasksSection';
import MobileMenu from '../../components/MobileMenu';

function KanbanPage() {
  return (
    <>
      <MobileMenu />
      <S.Container>
        <S.Header>
          <S.TitleContainer>
            <Title>Meu Kanban</Title>
            <PenIcon />
          </S.TitleContainer>

          <ProfilePhoto />
        </S.Header>

        <S.MainContent>
          <TasksSection />
        </S.MainContent>
      </S.Container>
    </>
  );
}

export default KanbanPage;
