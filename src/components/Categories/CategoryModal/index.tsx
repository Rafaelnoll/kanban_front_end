import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from './styles';
import CloseIcon from '../../../assets/close-circle.svg';

import Input from '../../Input';
import { FormCategoriesInputs } from '../../../interfaces/FormInputs';
import useAnimatedUnmount from '../../../hooks/useAnimatedUnmount';

interface TaskModalProps {
  title: string;
  onCancel: () => void;
  onSubmitEvent: (data: FormCategoriesInputs) => void;
  initialData?: Partial<FormCategoriesInputs>;
  visible: boolean;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório.')
    .max(16, 'O nome deve conter no máximo 16 caracteres.'),
});

function CategoryModal({
  title,
  onCancel,
  onSubmitEvent,
  initialData = {
    name: '',
  },
  visible,
}: TaskModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormCategoriesInputs>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const { shouldRender, animatedElementRef } = useAnimatedUnmount({ visible });

  const onSubmit: SubmitHandler<FormCategoriesInputs> = (data) => {
    onSubmitEvent(data);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <S.Container $isLoading={!visible} ref={animatedElementRef}>
      <S.ModalContainer $isLoading={!visible}>
        <S.ModalHeader>
          <S.Title>{title}</S.Title>
          <CloseIcon onClick={onCancel} />
        </S.ModalHeader>

        <S.ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="name" placeholder="Nome" />
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>

          <S.FormFooter>
            <S.CancelButton type="button" onClick={onCancel}>
              Cancelar
            </S.CancelButton>
            <S.SaveButton type="submit">Salvar</S.SaveButton>
          </S.FormFooter>
        </S.ModalForm>
      </S.ModalContainer>
    </S.Container>
  );
}

export default CategoryModal;
