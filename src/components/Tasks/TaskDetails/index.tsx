import React, { useEffect, useRef, useState } from 'react';

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    function handleClickOutside(event: MouseEvent) {
      if (container && !container?.contains(event.target as Node)) {
        setIsOnScreen(false);
        console.log('safds');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    function handleAnimationEnd() {
      if (!isOnScreen) {
        onCancel();
      }
    }

    container?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      container?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isOnScreen]);

  const handleCloseTaskDetails = () => setIsOnScreen(false);

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
          <S.CategoryName>{task.category_name}</S.CategoryName>
        </S.DetailContainer>
        <S.Description value={task.description} readOnly />
      </S.Content>
    </S.Container>
  );
}

export default TaskDetails;
