import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import CategoryIcon from '../../assets/category-icon.svg';

import Input from '../Input';
import CategorySelector from '../CategorySelector';
import { Category } from '../../interfaces/Category';
import CategoryController from '../../controllers/CategoryController';
import { FormTasksInputs } from '../../interfaces/FormInputs';
import StatusCheckBoxes from '../StatusCheckBoxes';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSubmitEvent: (data: FormTasksInputs) => void;
  initialData: Partial<FormTasksInputs>;
}

const schema = yup.object({
  title: yup.string().required('Título é obrigatório.'),
  description: yup.string().max(500, 'O máximo de caracteres é 500.'),
  category_id: yup.string().nullable(),
  status: yup.string().required('Status é obrigatório.'),
});

function TaskModal({
  title,
  onCancel,
  onSubmitEvent,
  initialData = {
    title: '',
    description: '',
    category_id: '',
    status: 'DO',
  },
}: TaskModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTasksInputs>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormTasksInputs> = (data) => {
    onSubmitEvent(data);
  };

  useEffect(() => {
    async function loadCategories() {
      const categories = await CategoryController.index();
      setCategories(categories);
    }

    loadCategories();
  }, []);

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <CloseIcon onClick={onCancel} />
        </S.ModalHeader>

        <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="title" placeholder="Título" />
          <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>

          <Input
            register={register}
            name="description"
            placeholder="Descrição..."
            asTextarea
          />
          <S.ErrorMessage>{errors.description?.message}</S.ErrorMessage>

          <StatusCheckBoxes
            defaultStatus={initialData.status}
            name="status"
            register={register}
          />
          <S.ErrorMessage>{errors.status?.message}</S.ErrorMessage>

          <CategorySelector
            register={register}
            name="category_id"
            categories={categories}
            icon={CategoryIcon}
            defaultValue={
              initialData.category_id ? initialData.category_id : ''
            }
          />
          <S.ErrorMessage>{errors.category_id?.message}</S.ErrorMessage>

          <S.FormFooter>
            <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
            <S.SaveButton type="submit">Salvar</S.SaveButton>
          </S.FormFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </S.Container>
  );
}

export default TaskModal;
