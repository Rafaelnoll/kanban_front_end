import React, { useState } from 'react';

import * as S from './styles';
import TrashIcon from '../../assets/trash-icon.svg';

interface TaskProps {
  title: string;
  description?: string;
  category?: string;
}

function Task({ title, description = '', category = '' }: TaskProps) {
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
            <S.DeleteButton>Deletar</S.DeleteButton>
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

      {category && (
        <S.CategoryContainer>
          <S.Category>{category}</S.Category>
        </S.CategoryContainer>
      )}
    </S.Container>
  );
}

export default Task;
