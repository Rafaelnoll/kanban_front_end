import React, { useState } from 'react';

import * as S from './styles';
import { Task as TypeTask } from '../../../interfaces/Task';
import { FormTasksInputs } from '../../../interfaces/FormInputs';
import TaskModal from '../TaskModal';
import TaskActions from '../TaskActions';

interface TaskProps extends TypeTask {
  onDelete: (taskId: string) => void;
  onUpdate: (props: FormTasksInputs, id: string) => void;
}

function Task({
  title,
  description = '',
  category_name = '',
  category_id = '',
  id,
  status,
  onDelete,
  onUpdate,
}: TaskProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleOpenUpdateModal() {
    setIsUpdateModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleCloseUpdateModal() {
    setIsUpdateModalOpen(false);
  }

  function handleUpdateTask({
    title,
    status,
    description,
    category_id,
  }: FormTasksInputs) {
    onUpdate({ title, status, description, category_id }, id);
    handleCloseUpdateModal();
  }

  return (
    <>
      {isUpdateModalOpen && (
        <TaskModal
          title="Modificar Tarefa"
          onSubmitEvent={handleUpdateTask}
          initialData={{
            title,
            description,
            status,
            category_id,
          }}
          onCancel={handleCloseUpdateModal}
        />
      )}
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
          <TaskActions
            onDelete={handleOpenDeleteModal}
            onUpdate={handleOpenUpdateModal}
          />
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
    </>
  );
}

export default Task;
