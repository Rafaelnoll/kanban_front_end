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
    const category = categories.find(
      (category) => String(category.id) === category_id,
    );

    const createdTask = {
      id: Date.now() as unknown as string,
      title,
      description,
      status,
      category_id: category_id ? category_id : null,
      category_name: category?.name ? category?.name : undefined,
    };

    toast.success('Tarefa criada');

    return createdTask;
  }

  async delete(taskId: string) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
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
    const updatedTask = {
      id,
      title,
      description,
      status,
      category_id: category_id ? category_id : null,
    };

    toast.success('Tarefa atualizada');
    return updatedTask;
  }
}

export default new TaskController();
