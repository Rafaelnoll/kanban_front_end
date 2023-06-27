import React, { useEffect, useState } from 'react';

import * as S from './styles';
import Task from '../Task';

import AddIcon from '../../assets/add-icon.svg';
import NoTasksIcon from '../../assets/no-task.svg';

import TaskModal from '../TaskModal';
import { FormTasksInputs } from '../../interfaces/FormInputs';
import TaskController from '../../controllers/TaskController';
import { TaskStatus, Task as TypeTask } from '../../interfaces/Task';

function TasksSection() {
  const [statusSelected, setStatusSelected] = useState<TaskStatus>('DO');
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const tasksSections = {
    DO: tasks.filter((task) => task.status === 'DO'),
    DOING: tasks.filter((task) => task.status === 'DOING'),
    DONE: tasks.filter((task) => task.status === 'DONE'),
  };

  function handleCancelTaskModal() {
    setIsTaskModalOpen(false);
  }

  function handleOpenTaskModal(status: TaskStatus) {
    setStatusSelected(status);
    setIsTaskModalOpen(true);
  }

  async function createTask({
    title,
    description,
    status,
    category_id,
  }: FormTasksInputs) {
    const newTask = await TaskController.store({
      title,
      description,
      status,
      category_id,
    });

    setTasks((prevState) => {
      prevState.push(newTask);
      return prevState;
    });

    setIsTaskModalOpen(false);
  }

  async function deleteTask(taskId: string) {
    const taskDeleted = await TaskController.delete(taskId);

    if (taskDeleted) {
      setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
    }
  }

  async function updateTask(
    { title, status, description, category_id }: FormTasksInputs,
    id: string,
  ) {
    const updatedTask = await TaskController.update({
      title,
      description,
      status,
      category_id,
      id,
    });

    if (updatedTask) {
      setTasks((prevState) =>
        prevState.map((task) => {
          if (task.id === id) {
            return updatedTask;
          }

          return task;
        }),
      );
    }
  }

  function renderTasks(tasks: TypeTask[]) {
    return tasks.length === 0 ? (
      <S.NoTasksContainer>
        <NoTasksIcon />
        <span>Sem tarefas</span>
      </S.NoTasksContainer>
    ) : (
      tasks.map((task) => (
        <Task
          title={task.title}
          category_name={task.category_name}
          category_id={task.category_id}
          description={task.description}
          id={task.id}
          key={task.id}
          status={task.status}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      ))
    );
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
          initialData={{
            status: statusSelected,
          }}
        />
      )}

      <S.Container>
        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>A fazer</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DO')} />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksSections.DO)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Fazendo</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DOING')} />
          </S.TasksContainerHeader>
          <S.TasksList>{renderTasks(tasksSections.DOING)}</S.TasksList>
        </S.TasksContainer>

        <S.TasksContainer>
          <S.TasksContainerHeader>
            <S.Label>Feito</S.Label>
            <AddIcon onClick={() => handleOpenTaskModal('DONE')} />
          </S.TasksContainerHeader>

          <S.TasksList>{renderTasks(tasksSections.DONE)}</S.TasksList>
        </S.TasksContainer>
      </S.Container>
    </>
  );
}

export default TasksSection;
