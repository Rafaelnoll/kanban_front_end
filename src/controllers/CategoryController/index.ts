import api from '../../services/api';

class CategoryController {
  async index() {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch categories');
    }
  }
}

export default new CategoryController();
