import { TaskStatus } from '../interfaces/Task';

export default function showTaskStatusInPtBR(status: TaskStatus) {
  switch (status) {
    case 'DO':
      return 'A fazer';
    case 'DOING':
      return 'Fazendo';
    case 'DONE':
      return 'Feito';
    default:
      return 'A Fazer';
  }
}
