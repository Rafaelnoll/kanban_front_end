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

interface InfoProfileInputs {
  username: string;
  email: string;
  description?: string;
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

  async getUserInfosById(userId: string) {
    try {
      const userResponse = await api.get(`/users/${userId}`);

      return userResponse.data;
    } catch (error) {
      toast.error('Erro ao buscar usuário');
    }
  }

  async updateInfo(
    { username, email, description }: InfoProfileInputs,
    id: string,
  ) {
    try {
      const userResponse = await api.put(`/users/${id}`, {
        username,
        email,
        description,
      });

      return userResponse.data;
    } catch (error) {
      toast.error('Erro ao atualizar usuário');
    }
  }
}

export default new UserController();
