import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type TypeHandleActionFunc = () => unknown;
type ErrorData = {
  error: string;
};

export async function handleAction(func: TypeHandleActionFunc) {
  try {
    return await func();
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const errorData = axiosError.response.data as ErrorData;
      toast.error(errorData.error);
    }
  }
}
