import React from 'react';

import * as S from './styles';
import CloseIcon from '../../../assets/close-circle.svg';
import { TaskStatus } from '../../../interfaces/Task';

type TypeTaskDetails = {
  title: string;
  description: string;
  status: TaskStatus;
  category_name: string;
};

interface TaskDetailsProps {
  task: TypeTaskDetails;
  onCancel: () => void;
}

function showTaskStatusInPtBR(status: TaskStatus) {
  switch (status) {
    case 'DO':
      return 'A fazer';
    case 'DOING':
      return 'Fazendo';
    case 'DONE':
      return 'Feito';
    default:
      return 'A Fazer';
  }
}

function TaskDetails({ task, onCancel }: TaskDetailsProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{task.title}</S.Title>
        <CloseIcon onClick={onCancel} />
      </S.Header>
      <S.Content>
        <S.DetailContainer>
          <S.Text>Status:</S.Text>
          <S.Status>{showTaskStatusInPtBR(task.status)}</S.Status>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Text>Categoria:</S.Text>
          <S.CategoryName>{task.category_name}</S.CategoryName>
        </S.DetailContainer>
        <S.Description>{task.description}</S.Description>
      </S.Content>
    </S.Container>
  );
}

export default TaskDetails;
