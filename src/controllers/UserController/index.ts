import { toast } from 'react-toastify';
import api from '../../services/api';

interface RegisterUserInputs {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginUserInputs {
  email: string;
  password: string;
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

  async getTokenAuthentication({ email, password }: LoginUserInputs) {
    try {
      const { data: token } = await api.post('/users/login', {
        email,
        password,
      });

      toast.success('Login feito com sucesso!');
      return token;
    } catch (error) {
      toast.error('Erro ao fazer login');
    }
  }
}

export default new UserController();
