import React from 'react';

import * as S from './styles';
import Title from '../../components/Title';
import PenIcon from '../../assets/pen-icon.svg';
import ProfilePhoto from '../../components/ProfilePhoto';

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
    </S.Container>
  );
}

export default KanbanPage;
