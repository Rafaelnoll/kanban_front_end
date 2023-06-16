import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';
import FilterIcon from '../../assets/filter-icon.svg';

import Title from '../../components/Title';
import ProfilePhoto from '../../components/ProfilePhoto';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TasksSection from '../../components/TasksSection';

function KanbanPage() {
  return (
    <S.Container>
      <S.Header>
        <S.TitleContainer>
          <Title>Meu Kanban</Title>
          <S.Image src={PenIcon as unknown as string} />
        </S.TitleContainer>

        <ProfilePhoto />
      </S.Header>

      <S.MainContent>
        <S.TopContent>
          <Button text="Filtrar" icon={FilterIcon as unknown as string} />
          <Input placeholder="Busque por cards, assuntos ou responsáveis..." />
        </S.TopContent>
        <TasksSection />
      </S.MainContent>
    </S.Container>
  );
}

export default KanbanPage;
