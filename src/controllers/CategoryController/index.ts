import { toast } from 'react-toastify';
import api from '../../services/api';

class CategoryController {
  async index() {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      toast.error('Erro ao carregar as categorias');
    }
  }
}

export default new CategoryController();
