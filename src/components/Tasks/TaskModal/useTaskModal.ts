import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CategoryController from '../../../controllers/CategoryController';
import { Category } from '../../../interfaces/Category';
import { FormTasksInputs } from '../../../interfaces/FormInputs';

interface useTaskModalProps {
  visible: boolean;
  initialData: Partial<FormTasksInputs>;
  onCancel: () => void;
  onSubmitEvent: (data: FormTasksInputs) => void;
}

const schema = yup.object({
  title: yup.string().required('Título é obrigatório.'),
  description: yup.string().max(500, 'O máximo de caracteres é 500.'),
  category_id: yup.string().nullable(),
  status: yup.string().required('Status é obrigatório.'),
});

function useTaskModal({
  visible,
  initialData,
  onCancel,
  onSubmitEvent,
}: useTaskModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormTasksInputs>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormTasksInputs> = (data) => {
    if (visible) {
      onSubmitEvent(data);
      reset({
        category_id: '',
        description: '',
        status: initialData.status,
        title: '',
      });
    }
  };

  function handleCancel() {
    onCancel();
    reset(initialData);
  }

  useEffect(() => {
    async function loadCategories() {
      const categories = await CategoryController.index();
      setCategories(categories);
    }

    loadCategories();
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    handleCancel,
    errors,
    categories,
  };
}

export default useTaskModal;
