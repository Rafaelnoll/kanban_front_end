import React from 'react';

import * as S from './styles';
import PenIcon from '../../assets/pen-icon.svg';
import FilterIcon from '../../assets/filter-icon.svg';

import Title from '../../components/Title';
import ProfilePhoto from '../../components/ProfilePhoto';
import Button from '../../components/Button';

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
        <Button text="Filtrar" icon={FilterIcon as unknown as string} />
      </S.MainContent>
    </S.Container>
  );
}

export default KanbanPage;
