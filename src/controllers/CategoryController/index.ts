import { toast } from 'react-toastify';

import { FormCategoriesInputs } from '../../interfaces/FormInputs';
import categories from '../../mocks/categories';
import { Category } from '../../interfaces/Category';

class CategoryController {
  async index() {
    return categories;
  }

  async store({ name }: FormCategoriesInputs) {
    const createdCategory = {
      id: Date.now(),
      name,
      tasks_count: 0,
    } as unknown as Category;

    toast.success('Categoria criada');
    return createdCategory;
  }

  async update({ name }: FormCategoriesInputs, id: string) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === id,
    );

    const updatedCategory = {
      ...categories[categoryIndex],
      name,
    };

    categories[categoryIndex] = updatedCategory;

    toast.success('Categoria modificada');
    return updatedCategory;
  }

  async delete(categoryId: string) {
    const categoryIndex = categories.findIndex(
      (category) => category.id === categoryId,
    );

    categories.splice(categoryIndex, 1);

    toast.success('Categoria deletada');
    return true;
  }
}

export default new CategoryController();
