import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import Button from '../../Button';
import Input from '../../Input';
import UserController from '../../../controllers/UserController';

interface FormForgotPasswordInputs {
  email: string;
}

const schema = yup.object({
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
});

export function FormForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormForgotPasswordInputs>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormForgotPasswordInputs> = ({
    email,
  }: FormForgotPasswordInputs) => {
    UserController.sendEmailToResetPassword(email);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.Label>E-mail</S.Label>
        <Input
          register={register}
          name="email"
          placeholder="Digite o seu e-mail"
          type="email"
        />
        {errors.email && (
          <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
        )}
      </S.InputContainer>

      <Button text="Enviar código" type="submit" />

      <S.SmallText>
        Lembra da senha? <S.FormLink to="/login">Login</S.FormLink>
      </S.SmallText>
    </S.Form>
  );
}
