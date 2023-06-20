export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'DO' | 'DOING' | 'DONE';
  category_id?: string | null;
  category_name?: string;
}
