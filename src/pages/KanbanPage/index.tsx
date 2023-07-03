import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';

import Title from '../../components/Title';
import ProfilePhoto from '../../components/ProfilePhoto';
import TasksSection from '../../components/TasksSection';
import MobileMenu from '../../components/MobileMenu';
import BaseTemplate from '../../components/BaseTemplate';
import SideMenu from '../../components/SideMenu';

function KanbanPage() {
  return (
    <>
      <BaseTemplate>
        <SideMenu />

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
      </BaseTemplate>
    </>
  );
}

export default KanbanPage;
