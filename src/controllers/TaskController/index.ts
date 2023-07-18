import { toast } from 'react-toastify';

import { Task } from '../../interfaces/Task';
import api from '../../services/api';
import { handleAction } from '../../utils/handleAction';

class TaskController {
  async index() {
    return handleAction(async () => {
      const allTasksResponse = await api.get('/tasks');

      return allTasksResponse.data;
    });
  }

  async store({
    title,
    description = '',
    status = 'DO',
    category_id,
  }: Omit<Task, 'id'>) {
    return handleAction(async () => {
      const createdTaskResponse = await api.post('/tasks', {
        title,
        description,
        status,
        category_id: category_id ? category_id : null,
      });

      toast.success('Tarefa criada');
      return createdTaskResponse.data;
    });
  }

  async delete(taskId: string) {
    return handleAction(async () => {
      await api.delete(`/tasks/${taskId}`);
      toast.success('Tarefa deletada');
      return true;
    });
  }

  async update({
    title,
    description = '',
    status = 'DO',
    category_id,
    id,
  }: Task) {
    return handleAction(async () => {
      const updatedUserResponse = await api.put(`/tasks/${id}`, {
        title,
        description,
        status,
        category_id: category_id ? category_id : null,
      });
      toast.success('Tarefa atualizada');
      return updatedUserResponse.data;
    });
  }
}

export default new TaskController();
