import React, { useState } from 'react';

import * as S from './styles';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import MoreIcon from '../../../assets/more-icon.svg';
import CloseIcon from '../../../assets/close-icon.svg';

interface TaskActionsProps {
  onUpdate: () => void;
  onDelete: () => void;
}

export default function TaskActions({ onUpdate, onDelete }: TaskActionsProps) {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  return (
    <S.TaskActionsContainer>
      {isActionsOpen ? (
        <CloseIcon onClick={() => setIsActionsOpen(false)} />
      ) : (
        <MoreIcon onClick={() => setIsActionsOpen(true)} />
      )}
      {isActionsOpen && (
        <S.TaskActions>
          <S.Action onClick={onUpdate}>
            <EditIcon />
            Editar
          </S.Action>
          <S.Action onClick={onDelete}>
            <TrashIcon />
            Deletar
          </S.Action>
        </S.TaskActions>
      )}
    </S.TaskActionsContainer>
  );
}
