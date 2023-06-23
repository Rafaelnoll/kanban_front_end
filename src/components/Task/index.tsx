import React, { useState } from 'react';

import * as S from './styles';
import TrashIcon from '../../assets/trash-icon.svg';
import { Task as TypeTask } from '../../interfaces/Task';

interface TaskProps extends Omit<TypeTask, 'status'> {
  onDelete: (taskId: string) => void;
}

function Task({
  title,
  description = '',
  category_name = '',
  id,
  onDelete,
}: TaskProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return (
    <S.Container>
      {isDeleteModalOpen && (
        <S.ModalDeleteContainer>
          <S.ModalDeleteText>Deletar essa tarefa?</S.ModalDeleteText>
          <S.ModalDeleteActions>
            <S.CancelButton onClick={handleCloseDeleteModal}>
              Cancelar
            </S.CancelButton>
            <S.DeleteButton onClick={() => onDelete(id)}>
              Deletar
            </S.DeleteButton>
          </S.ModalDeleteActions>
        </S.ModalDeleteContainer>
      )}

      <S.TaskHeader>
        <S.TaskTitle>{title}</S.TaskTitle>
        <TrashIcon onClick={handleOpenDeleteModal} />
      </S.TaskHeader>

      {description ? (
        <S.Description>{description}</S.Description>
      ) : (
        <S.Description>Sem descrição...</S.Description>
      )}

      {category_name && (
        <S.CategoryContainer>
          <S.Category>{category_name}</S.Category>
        </S.CategoryContainer>
      )}
    </S.Container>
  );
}

export default Task;
