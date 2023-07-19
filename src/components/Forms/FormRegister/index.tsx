import React from 'react';

import * as S from './styles';

import Input from '../../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button';
import UserController from '../../../controllers/UserController';

interface FormRegisterInputs {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object({
  username: yup
    .string()
    .required('Nome é obrigatório')
    .max(16, 'Nome pode ter até 16 caracteres'),
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigatório.'),
  password_confirmation: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'Senhas devem ser iguais'),
});

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterInputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormRegisterInputs> = async ({
    username,
    email,
    password,
    password_confirmation,
  }: FormRegisterInputs) => {
    await UserController.store({
      username,
      email,
      password,
      password_confirmation,
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.Label>Nome de usuário</S.Label>
        <Input
          register={register}
          name="username"
          placeholder="Digite o seu nome de usuário"
        />
        {errors.username && (
          <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>
        )}
      </S.InputContainer>

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

      <S.InputContainer>
        <S.Label>Senha</S.Label>
        <Input
          register={register}
          name="password"
          placeholder="Digite a sua senha"
          type="password"
        />
        {errors.password && (
          <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
        )}
      </S.InputContainer>

      <S.InputContainer>
        <S.Label>Confirmar senha</S.Label>
        <Input
          register={register}
          name="password_confirmation"
          placeholder="Confirme a sua senha"
          type="password"
        />
        {errors.password_confirmation && (
          <S.ErrorMessage>
            {errors.password_confirmation.message}
          </S.ErrorMessage>
        )}
      </S.InputContainer>

      <Button text="Registrar" type="submit" />

      <S.Separator />

      <S.SmallText>
        Já tem uma conta? <S.FormLink to="/login">Faça login agora</S.FormLink>
      </S.SmallText>
    </S.Form>
  );
}
