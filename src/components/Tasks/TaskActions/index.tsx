import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as S from './styles';
import TrashIcon from '../../../assets/trash-icon.svg';
import EditIcon from '../../../assets/edit-icon.svg';
import MoreIcon from '../../../assets/more-icon.svg';
import CloseIcon from '../../../assets/close-icon.svg';
import InfoIcon from '../../../assets/info-icon.svg';

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
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const actionsMenuRef = useRef<HTMLDivElement | null>(null);

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

  function handleSeeDetails() {
    onSeeDetails();
    closeActionsMenu();
  }

  useEffect(() => {
    const actionsMenu = actionsMenuRef.current;

    function handleClickOutside(event: MouseEvent) {
      if (!actionsMenu?.contains(event.target as Node)) {
        setIsActionsOpen(false);
      }
    }

    document?.addEventListener('mousedown', handleClickOutside);

    return () => document?.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.TaskActionsContainer ref={actionsMenuRef}>
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
          <S.Action onClick={handleSeeDetails}>
            <InfoIcon />
            Detalhes
          </S.Action>
        </S.TaskActions>
      )}
    </S.TaskActionsContainer>
  );
}
