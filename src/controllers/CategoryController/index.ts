import { toast } from 'react-toastify';
import { handleAction } from '../../utils/handleAction';

import api from '../../services/api';
import { FormCategoriesInputs } from '../../interfaces/FormInputs';

class CategoryController {
  async index() {
    return handleAction(async () => {
      const response = await api.get('/categories');
      return response.data;
    });
  }

  async store({ name }: FormCategoriesInputs) {
    return handleAction(async () => {
      const createdCategoryResponse = await api.post('/categories', {
        name,
      });

      toast.success('Categoria criada');
      return createdCategoryResponse.data;
    });
  }

  async update({ name }: FormCategoriesInputs, id: string) {
    return handleAction(async () => {
      const createdCategoryResponse = await api.put(`/categories/${id}`, {
        name,
      });

      toast.success('Categoria modificada');
      return createdCategoryResponse.data;
    });
  }

  async delete(categoryId: string) {
    return handleAction(async () => {
      const createdCategoryResponse = await api.delete(
        `/categories/${categoryId}`,
      );

      toast.success('Categoria deletada');
      return createdCategoryResponse.data;
    });
  }
}

export default new CategoryController();
