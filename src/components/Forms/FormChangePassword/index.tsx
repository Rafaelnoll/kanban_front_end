import React from 'react';

import * as S from './styles';

import Input from '../../../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import UserController from '../../../controllers/UserController';
import useAuthentication from '../../../hooks/useAuthentication';

interface FormChangePasswordInputs {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

const schema = yup.object({
  current_password: yup.string().required('Senha atual é obrigatória.'),
  new_password: yup.string().required('Nova senha é obrigatória.'),
  new_password_confirmation: yup
    .string()
    .required('Confirme a nova senha')
    .oneOf([yup.ref('new_password')], 'Senhas devem ser iguais'),
});

export function FormChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormChangePasswordInputs>({
    defaultValues: {
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
    resolver: yupResolver(schema),
  });

  const { user } = useAuthentication();

  const handleResetFormFields = () => {
    reset({
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
    });
  };

  const onSubmit: SubmitHandler<FormChangePasswordInputs> = async ({
    current_password,
    new_password,
  }: FormChangePasswordInputs) => {
    if (user) {
      await UserController.changePassword(
        { current_password, new_password },
        user.id,
      );
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.Label>Senha atual</S.Label>
        <Input
          register={register}
          name="current_password"
          placeholder="Digite a sua senha atual"
          type="password"
        />
        {errors.current_password && (
          <S.ErrorMessage>{errors.current_password.message}</S.ErrorMessage>
        )}
      </S.InputContainer>

      <S.InputContainer>
        <S.Label>Nova senha</S.Label>
        <Input
          register={register}
          name="new_password"
          placeholder="Digite a sua nova senha"
          type="password"
        />
        {errors.new_password && (
          <S.ErrorMessage>{errors.new_password.message}</S.ErrorMessage>
        )}
      </S.InputContainer>

      <S.InputContainer>
        <S.Label>Confirmar nova senha</S.Label>
        <Input
          register={register}
          name="new_password_confirmation"
          placeholder="Digite a sua nova senha novamente"
          type="password"
        />
        {errors.new_password_confirmation && (
          <S.ErrorMessage>
            {errors.new_password_confirmation.message}
          </S.ErrorMessage>
        )}
      </S.InputContainer>

      <S.FormFooter>
        <S.CancelButton type="button" onClick={handleResetFormFields}>
          Cancelar
        </S.CancelButton>
        <S.SaveButton type="submit">Salvar</S.SaveButton>
      </S.FormFooter>
    </S.Form>
  );
}
