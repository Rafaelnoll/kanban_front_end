import api from '../../services/api';

class CategoryController {
  async index() {
    const response = await api.get('/categories');
    return response.data;
  }
}

export default new CategoryController();
