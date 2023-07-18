import { toast } from 'react-toastify';
import api from '../../services/api';
import { handleAction } from '../../utils/handleAction';

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
    return handleAction(async () => {
      await api.post('/users', {
        username,
        email,
        password,
        password_confirmation,
      });

      toast.success('Usuário criado com sucesso!');
    });
  }

  async getTokenAuthentication({ email, password }: LoginUserInputs) {
    return handleAction(async () => {
      const { data: token } = await api.post('/users/login', {
        email,
        password,
      });

      toast.success('Login feito com sucesso!');
      return token;
    });
  }

  async getUserInfosById(userId: string) {
    return handleAction(async () => {
      const userResponse = await api.get(`/users/${userId}`);

      return userResponse.data;
    });
  }

  async updateInfo(
    { username, email, description }: InfoProfileInputs,
    id: string,
  ) {
    return handleAction(async () => {
      const userResponse = await api.put(`/users/${id}`, {
        username,
        email,
        description,
      });

      return userResponse.data;
    });
  }
}

export default new UserController();
