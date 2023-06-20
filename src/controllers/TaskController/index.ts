import { toast } from 'react-toastify';

import { Task } from '../../interfaces/Task';
import api from '../../services/api';

class TaskController {
  async index() {
    try {
      const allTasksResponse = await api.get('/tasks');

      return allTasksResponse.data;
    } catch (error) {
      toast.error('Erro ao carregar as tarefas');
    }
  }

  async store({
    title,
    description = '',
    status = 'DO',
    category_id,
  }: Omit<Task, 'id'>) {
    try {
      const createdTask = await api.post('/tasks', {
        title,
        description,
        status,
        category_id: category_id ? category_id : null,
      });

      toast.success('Tarefa criada');
      return createdTask;
    } catch (error) {
      toast.error('Erro ao criar a tarefa');
    }
  }
}

export default new TaskController();
