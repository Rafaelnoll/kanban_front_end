import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './styles';
import CloseIcon from '../../../assets/close-circle.svg';

import Input from '../../Input';
import { FormCategoriesInputs } from '../../../interfaces/FormInputs';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSubmitEvent: (data: FormCategoriesInputs) => void;
  initialData?: Partial<FormCategoriesInputs>;
}

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório.'),
});

function CategoryModal({
  title,
  onCancel,
  onSubmitEvent,
  initialData = {
    name: '',
  },
}: TaskModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCategoriesInputs>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormCategoriesInputs> = (data) => {
    onSubmitEvent(data);
  };

  return (
    <S.Container>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <CloseIcon onClick={onCancel} />
        </S.ModalHeader>

        <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="name" placeholder="Nome" />
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>

          <S.FormFooter>
            <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>
            <S.SaveButton type="submit">Salvar</S.SaveButton>
          </S.FormFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </S.Container>
  );
}

export default CategoryModal;
