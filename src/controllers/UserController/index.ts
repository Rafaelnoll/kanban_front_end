import { toast } from 'react-toastify';
import api from '../../services/api';
import { handleAction } from '../../utils/handleAction';
import user from '../../mocks/user';

interface InfoProfileInputs {
  username: string;
  email: string;
  description?: string;
}

interface ChangePasswordInputs {
  current_password: string;
  new_password: string;
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

  async changePassword(
    { current_password, new_password }: ChangePasswordInputs,
    id: string,
  ) {
    return handleAction(async () => {
      await api.put(`/users/${id}/change-password`, {
        current_password,
        new_password,
      });

      toast.success('Senha alterada!');
    });
  }
}

export default new UserController();
