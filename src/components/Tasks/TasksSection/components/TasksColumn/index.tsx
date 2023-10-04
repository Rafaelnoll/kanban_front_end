import React from 'react';

import * as S from './styles';
import AddIcon from '../../../../../assets/add-icon.svg';

import TaskModal from '../../../TaskModal';

import { Task as TypeTask, TaskStatus } from '../../../../../interfaces/Task';
import { FormTasksInputs } from '../../../../../interfaces/FormInputs';
import useTasksColumn from './useTasksColumn';

interface TasksColumnsProps {
  label: string;
  defaultStatus: TaskStatus;
  onCreateTask: (data: FormTasksInputs) => void;
  onDeleteTask: (taskId: string) => Promise<void>;
  onUpdateTask: (
    { title, status, description, category_id }: FormTasksInputs,
    id: string,
  ) => Promise<void>;
  tasks: TypeTask[];
  searchValue: string;
  selectedCategory: string;
  isLoading: boolean;
}

function TasksColumn({
  label,
  defaultStatus,
  onCreateTask,
  tasks,
  searchValue,
  selectedCategory,
  isLoading,
  onDeleteTask,
  onUpdateTask,
}: TasksColumnsProps) {
  const {
    handleCancelModal,
    handleOpenModal,
    handleCreateTask,
    isModalOpen,
    renderTasks,
  } = useTasksColumn({
    isLoading,
    onCreateTask,
    onDeleteTask,
    onUpdateTask,
    searchValue,
    selectedCategory,
  });

  return (
    <S.TasksContainer>
      <TaskModal
        title="Criar Tarefa"
        onCancel={handleCancelModal}
        onSubmitEvent={handleCreateTask}
        initialData={{
          title: '',
          category_id: '',
          description: '',
          status: defaultStatus,
        }}
        visible={isModalOpen}
      />

      <S.TasksContainerHeader>
        <S.Label>{label}</S.Label>
        <AddIcon onClick={handleOpenModal} />
      </S.TasksContainerHeader>

      <S.TasksList>{renderTasks(tasks)}</S.TasksList>
    </S.TasksContainer>
  );
}

export default TasksColumn;
