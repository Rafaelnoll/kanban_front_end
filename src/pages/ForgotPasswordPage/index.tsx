import React from 'react';

import * as S from './styles';
import KanbanImage from '../../assets/login-kanban.svg';
import LogoIcon from '../../assets/logo.svg';
import Input from '../../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';

interface FormForgotPasswordInputs {
  email: string;
}

const schema = yup.object({
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
});

function ForgotPasswordPage() {
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
    console.log(email);
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <KanbanImage />
      </S.ImageContainer>

      <S.FormContainer>
        <S.FormHeader>
          <LogoIcon />
          <S.Text>Kanban</S.Text>
        </S.FormHeader>

        <S.TextContainer>
          <S.Title>Esqueceu a senha?</S.Title>
          <S.Description>
            Não se preocupe! Isso acontece. Por favor, informe o seu endereço de
            de e-mail conectado à sua conta para que eu possa ajudar você.
          </S.Description>
        </S.TextContainer>

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
      </S.FormContainer>
    </S.Container>
  );
}

export default ForgotPasswordPage;
