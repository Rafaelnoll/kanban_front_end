import { toast } from 'react-toastify';

import { Task } from '../../interfaces/Task';
import tasks from '../../mocks/tasks';
import categories from '../../mocks/categories';

class TaskController {
  async index() {
    return tasks;
  }

  async store({
    title,
    description = '',
    status = 'DO',
    category_id,
  }: Omit<Task, 'id'>) {
    const categoryIndex = categories.findIndex(
      (category) => String(category.id) === category_id,
    );

    const category = categories[categoryIndex];

    const createdTask = {
      id: Date.now() as unknown as string,
      title,
      description,
      status,
      category_id: category_id ? category_id : null,
      category_name: category?.name ? category?.name : undefined,
    };

    if (category) {
      categories[categoryIndex].tasks_count = `${
        Number(category.tasks_count) + 1
      }`;
    }

    toast.success('Tarefa criada');

    return createdTask;
  }

  async delete(taskId: string) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const task = tasks[taskIndex];

    if (task.category_id) {
      const categoryIndex = categories.findIndex(
        (category) => String(category.id) === task.category_id,
      );

      const category = categories[categoryIndex];

      categories[categoryIndex].tasks_count = `${
        Number(category.tasks_count) - 1
      }`;
    }

    tasks.splice(taskIndex, 1);
    return true;
  }

  async update({
    title,
    description = '',
    status = 'DO',
    category_id,
    id,
  }: Task) {
    const categoryIndex = categories.findIndex(
      (category) => String(category.id) === category_id,
    );

    const taskIndex = tasks.findIndex((task) => task.id === id);

    const category = categories[categoryIndex];

    const updatedTask = {
      id,
      title,
      description,
      status,
      category_id: category_id ? category_id : null,
      category_name: category?.name ? category?.name : undefined,
    };

    tasks[taskIndex] = updatedTask;

    toast.success('Tarefa atualizada');
    return updatedTask;
  }
}

export default new TaskController();
