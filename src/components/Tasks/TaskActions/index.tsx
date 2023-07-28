import React, { useCallback, useEffect, useState } from 'react';

import * as S from './styles';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import MoreIcon from '../../../assets/more-icon.svg';
import CloseIcon from '../../../assets/close-icon.svg';

interface TaskActionsProps {
  onUpdate: () => void;
  onDelete: () => void;
  taskRef?: React.RefObject<HTMLDivElement>;
}

export default function TaskActions({
  onUpdate,
  onDelete,
  taskRef,
}: TaskActionsProps) {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const closeActionsMenu = useCallback(() => {
    setIsActionsOpen(false);
  }, []);

  function handleUpdate() {
    onUpdate();
    closeActionsMenu();
  }

  function handleDelete() {
    onDelete();
    closeActionsMenu();
  }

  useEffect(() => {
    const taskContainer = taskRef?.current;

    taskContainer?.addEventListener('mouseleave', closeActionsMenu);

    return () =>
      taskContainer?.removeEventListener('mouseleave', closeActionsMenu);
  }, [taskRef]);

  return (
    <S.TaskActionsContainer>
      {isActionsOpen ? (
        <CloseIcon onClick={() => setIsActionsOpen(false)} />
      ) : (
        <MoreIcon onClick={() => setIsActionsOpen(true)} />
      )}
      {isActionsOpen && (
        <S.TaskActions>
          <S.Action onClick={handleUpdate}>
            <EditIcon />
            Editar
          </S.Action>
          <S.Action onClick={handleDelete}>
            <TrashIcon />
            Deletar
          </S.Action>
        </S.TaskActions>
      )}
    </S.TaskActionsContainer>
  );
}
