import { toast } from 'react-toastify';
import api from '../../services/api';
import { handleAction } from '../../utils/handleAction';
import user from '../../mocks/user';

interface InfoProfileInputs {
  username: string;
  email: string;
  description?: string | null;
}

class UserController {
  async updateInfo({ username, email, description }: InfoProfileInputs) {
    const updatedUser = {
      ...user,
      username,
      email,
      description,
    };

    return updatedUser;
  }

  async updateUserImageProfile(formData: FormData, id: string) {
    return handleAction(async () => {
      const updatedUser = await api.put(
        `/users/${id}/change-picture`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return updatedUser.data;
    });
  }

  async changePassword() {
    toast.success('Senha alterada!');
  }
}

export default new UserController();
