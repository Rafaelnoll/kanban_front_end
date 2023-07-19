import React from 'react';

import * as S from './styles';
import TasksSection from '../../components/TasksSection';
import MobileMenu from '../../components/MobileMenu';
import BaseTemplate from '../../components/BaseTemplate';
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';

function KanbanPage() {
  return (
    <>
      <BaseTemplate>
        <SideMenu />

        <MobileMenu />

        <S.Container>
          <Header title="Meu Kanban" />

          <S.MainContent>
            <TasksSection />
          </S.MainContent>
        </S.Container>
      </BaseTemplate>
    </>
  );
}

export default KanbanPage;
