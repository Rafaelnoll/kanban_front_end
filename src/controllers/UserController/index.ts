import { toast } from 'react-toastify';
import api from '../../services/api';

interface RegisterUserInputs {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

class UserController {
  async store({
    username,
    email,
    password,
    password_confirmation,
  }: RegisterUserInputs) {
    try {
      await api.post('/users', {
        username,
        email,
        password,
        password_confirmation,
      });

      toast.success('Usuário criado com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar usuário');
    }
  }
}

export default new UserController();
