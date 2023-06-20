import React, { useEffect, useState } from 'react';

import * as S from './styles';
import Task from '../Task';
import AddIcon from '../../assets/add-icon.svg';
import TaskModal from '../TaskModal';
import { FormTasksInputs } from '../../interfaces/FormInputs';
import TaskController from '../../controllers/TaskController';
import { Task as TypeTask } from '../../interfaces/Task';

function TasksSection() {
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const tasksToDo = tasks.filter((task) => task.status === 'DO');
  const tasksDoing = tasks.filter((task) => task.status === 'DOING');
  const tasksDone = tasks.filter((task) => task.status === 'DONE');

  function handleCancelTaskModal() {
    setIsTaskModalOpen(false);
  }

  function handleOpenTaskModal() {
    setIsTaskModalOpen(true);
  }

  function renderTasks(tasks: TypeTask[]) {
    return tasks.length === 0 ? (
      <span>Sem tasks</span>
    ) : (
      tasks.map((task) => (
        <Task
          title={task.title}
          category={task.category_name}
          description={task.description}
          key={task.id}
        />
      ))
    );
  }

  async function createTask({
    title,
    description,
    category_id,
  }: FormTasksInputs) {
    await TaskController.store({
      title,
      description,
      status: 'DO',
      category_id,
    });
  }

  useEffect(() => {
    async function loadTasks() {
      const tasks = await TaskController.index();

      if (!tasks) return;

      setTasks(tasks);
    }

    loadTasks();
  }, []);

  return (
    <>
      {isTaskModalOpen && (
        <TaskModal
          title="Criar Tarefa"
          onCancel={handleCancelTaskModal}
          onSubmitEvent={createTask}
        />
      )}

      <S.Container>
        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>A fazer</S.Label>
            <AddIcon onClick={handleOpenTaskModal} />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksToDo)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Fazendo</S.Label>
            <AddIcon />
          </S.TasksContainerHeader>
          <S.TasksList>{renderTasks(tasksDoing)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Feito</S.Label>
            <AddIcon />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksDone)}</S.TasksList>
        </S.TasksContainer>
      </S.Container>
    </>
  );
}

export default TasksSection;
