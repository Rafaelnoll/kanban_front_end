import React, { useRef } from 'react';

import * as S from './styles';
import CloseIcon from '../../../assets/close-circle.svg';
import { TaskStatus } from '../../../interfaces/Task';
import useTaskDetails from './useTaskDetails';

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
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isOnScreen, handleCloseTaskDetails } = useTaskDetails(
    containerRef,
    onCancel,
  );

  return (
    <S.Container ref={containerRef} inscreen={isOnScreen ? 'true' : 'false'}>
      <S.Header>
        <S.Title>{task.title}</S.Title>
        <CloseIcon onClick={handleCloseTaskDetails} />
      </S.Header>
      <S.Content>
        <S.DetailContainer>
          <S.Text>Status:</S.Text>
          <S.Status>{showTaskStatusInPtBR(task.status)}</S.Status>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.Text>Categoria:</S.Text>
          {task.category_name ? (
            <S.CategoryName>{task.category_name}</S.CategoryName>
          ) : (
            <S.Text>Sem categoria</S.Text>
          )}
        </S.DetailContainer>
        <S.Description value={task.description} readOnly />
      </S.Content>
    </S.Container>
  );
}

export default TaskDetails;
