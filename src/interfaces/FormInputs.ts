import { Task } from './Task';

export interface FormTasksInputs {
  title: string;
  description: string;
  category_id: string | null;
  status: Task['status'];
}

export interface FormCategoriesInputs {
  name: string;
}
