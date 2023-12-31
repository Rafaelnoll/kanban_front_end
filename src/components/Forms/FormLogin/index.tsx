import React, { useEffect } from 'react';

import * as S from './styles';

import Input from '../../../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button';
import useAuthentication from '../../../hooks/useAuthentication';
import UserController from '../../../controllers/UserController';
import { useNavigate } from 'react-router-dom';

interface FormLoginInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigatório.'),
});

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { user, handleLogin } = useAuthentication();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormLoginInputs> = async ({
    email,
    password,
  }: FormLoginInputs) => {
    const authenticationData = await UserController.getTokenAuthentication({
      email,
      password,
    });

    handleLogin(authenticationData);
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });

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

      <S.FormLink to="/forgot-password">Esqueceu a senha?</S.FormLink>

      <Button text="Logar" type="submit" />

      <S.Separator />

      <S.SmallText>
        Não tem uma conta?{' '}
        <S.FormLink to="/register">Registre-se agora</S.FormLink>
      </S.SmallText>
    </S.Form>
  );
}
