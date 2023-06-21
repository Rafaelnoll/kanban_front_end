import { Task } from './Task';

export interface FormTasksInputs {
  title: string;
  description: string;
  category_id: string;
  status: Task['status'];
}
