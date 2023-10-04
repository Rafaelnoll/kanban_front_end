import React, { useState } from 'react';

import * as S from './styles';

import Task from '../../../Task';
import TaskSkeleton from '../../../TaskSkeleton';
import NoTasksIcon from '../../../../../assets/no-task.svg';

import { FormTasksInputs } from '../../../../../interfaces/FormInputs';
import { Task as TypeTask } from '../../../../../interfaces/Task';

interface useTasksColumnProps {
  onCreateTask: (data: FormTasksInputs) => void;
  onDeleteTask: (taskId: string) => Promise<void>;
  onUpdateTask: (
    { title, status, description, category_id }: FormTasksInputs,
    id: string,
  ) => Promise<void>;
  searchValue: string;
  selectedCategory: string;
  isLoading: boolean;
}

function useTasksColumn({
  onCreateTask,
  searchValue,
  selectedCategory,
  isLoading,
  onDeleteTask,
  onUpdateTask,
}: useTasksColumnProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCancelModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCreateTask(data: FormTasksInputs) {
    onCreateTask(data);
    setIsModalOpen(false);
  }

  function filterTasksByTitleOrDescription(tasks: TypeTask[]) {
    return tasks.filter((task) => {
      return (
        task.title
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        task.description?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }

  function filterTasksByCategory(tasks: TypeTask[]) {
    return tasks.filter((task) => {
      if (!selectedCategory) return true;

      return (
        task.category_name?.toLowerCase() === selectedCategory.toLowerCase()
      );
    });
  }

  function renderTasks(tasks: TypeTask[]) {
    if (isLoading) {
      return <TaskSkeleton />;
    }

    if (
      tasks.length === 0 ||
      filterTasksByTitleOrDescription(tasks).length === 0
    ) {
      return (
        <S.NoTasksContainer>
          <NoTasksIcon />
          <span>Sem tarefas</span>
        </S.NoTasksContainer>
      );
    }

    return searchValue.length >= 1
      ? filterTasksByTitleOrDescription(filterTasksByCategory(tasks)).map(
          (task) => (
            <Task
              title={task.title}
              category_name={task.category_name}
              category_id={task.category_id}
              description={task.description}
              id={task.id}
              key={task.id}
              status={task.status}
              onDelete={onDeleteTask}
              onUpdate={onUpdateTask}
            />
          ),
        )
      : filterTasksByCategory(tasks).map((task) => (
          <Task
            title={task.title}
            category_name={task.category_name}
            category_id={task.category_id}
            description={task.description}
            id={task.id}
            key={task.id}
            status={task.status}
            onDelete={onDeleteTask}
            onUpdate={onUpdateTask}
          />
        ));
  }

  return {
    renderTasks,
    isModalOpen,
    handleCreateTask,
    handleCancelModal,
    handleOpenModal,
  };
}

export default useTasksColumn;
