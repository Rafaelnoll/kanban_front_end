import { ChangeEvent, useEffect, useState } from 'react';

import { FormTasksInputs } from '../../../interfaces/FormInputs';
import { Task as TypeTask } from '../../../interfaces/Task';
import TaskController from '../../../controllers/TaskController';

export default function useTaskSection() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('');
  const [tasks, setTasks] = useState<TypeTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const tasksSections = {
    DO: tasks.filter((task) => task.status === 'DO'),
    DOING: tasks.filter((task) => task.status === 'DOING'),
    DONE: tasks.filter((task) => task.status === 'DONE'),
  };

  function handleSelectCategoryFilter(categorySelected: string) {
    setSelectedCategoryFilter((prevState) =>
      categorySelected === prevState ? '' : categorySelected,
    );
  }

  function handleChangeSearchValue(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
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

    setTasks([...tasks, newTask]);
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

  useEffect(() => {
    async function loadTasks() {
      setIsLoading(true);
      const tasks = await TaskController.index();

      if (!tasks) return;

      setTasks(tasks);
      setIsLoading(false);
    }

    loadTasks();
  }, []);

  return {
    selectedCategoryFilter,
    handleSelectCategoryFilter,
    searchValue,
    handleChangeSearchValue,
    createTask,
    updateTask,
    deleteTask,
    tasksSections,
    isLoading,
  };
}
