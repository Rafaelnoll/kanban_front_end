import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import CloseIcon from '../../assets/close-circle.svg';
import CategoryIcon from '../../assets/category-icon.svg';

import Input from '../Input';
import CategorySelector from '../CategorySelector';
import { Category } from '../../interfaces/Category';
import CategoryController from '../../controllers/CategoryController';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSave: () => void;
}

interface IFormInput {
  title: string;
  description: string;
  category: string;
}

function TaskModal({ title, onCancel, onSave }: TaskModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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

          <Input
            register={register}
            name="description"
            placeholder="Descrição..."
            asTextarea
          />

          <CategorySelector
            register={register}
            name="category"
            categories={categories}
            icon={CategoryIcon}
            defaultValue="Sem categoria"
          />

          <S.FormFooter>
            <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
            <S.SaveButton type="submit" onClick={onSave}>
              Salvar
            </S.SaveButton>
          </S.FormFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </S.Container>
  );
}

export default TaskModal;
