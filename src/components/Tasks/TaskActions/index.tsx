import React, { useRef } from 'react';

import * as S from './styles';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import MoreIcon from '../../../assets/more-icon.svg';
import CloseIcon from '../../../assets/close-icon.svg';
import InfoIcon from '../../../assets/info-icon.svg';
import useTaskActions from './useTaskActions';

interface TaskActionsProps {
  onUpdate: () => void;
  onDelete: () => void;
  onSeeDetails: () => void;
}

export default function TaskActions({
  onUpdate,
  onDelete,
  onSeeDetails,
}: TaskActionsProps) {
  const actionsMenuRef = useRef<HTMLDivElement | null>(null);
  const {
    handleDelete,
    handleSeeDetails,
    handleUpdate,
    isActionsOpen,
    handleChangeActionsIsOpen,
  } = useTaskActions({
    onDelete,
    onSeeDetails,
    onUpdate,
    actionsMenuRef,
  });

  return (
    <S.TaskActionsContainer ref={actionsMenuRef}>
      {isActionsOpen ? (
        <CloseIcon onClick={() => handleChangeActionsIsOpen(false)} />
      ) : (
        <MoreIcon onClick={() => handleChangeActionsIsOpen(true)} />
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
          <S.Action onClick={handleSeeDetails}>
            <InfoIcon />
            Detalhes
          </S.Action>
        </S.TaskActions>
      )}
    </S.TaskActionsContainer>
  );
}
