import { toast } from 'react-toastify';

import api from '../../services/api';
import { FormCategoriesInputs } from '../../interfaces/FormInputs';

class CategoryController {
  async index() {
    try {
      const response = await api.get('/categories');
      return response.data;
    } catch (error) {
      toast.error('Erro ao carregar as categorias');
    }
  }

  async store({ name }: FormCategoriesInputs) {
    try {
      const createdCategoryResponse = await api.post('/categories', {
        name,
      });

      toast.success('Categoria criada');
      return createdCategoryResponse.data;
    } catch (error) {
      toast.error('Erro ao criar a Categoria');
    }
  }

  async update({ name }: FormCategoriesInputs, id: string) {
    try {
      const createdCategoryResponse = await api.put(`/categories/${id}`, {
        name,
      });

      toast.success('Categoria modificada');
      return createdCategoryResponse.data;
    } catch (error) {
      toast.error('Erro ao modificar a Categoria');
    }
  }

  async delete(categoryId: string) {
    try {
      const createdCategoryResponse = await api.delete(
        `/categories/${categoryId}`,
      );

      toast.success('Categoria deletada');
      return createdCategoryResponse.data;
    } catch (error) {
      toast.error('Erro ao deletar a Categoria');
    }
  }
}

export default new CategoryController();
