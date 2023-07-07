import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import BaseTemplate from '../../components/BaseTemplate';
import MobileMenu from '../../components/MobileMenu';
import ProfilePhoto from '../../components/ProfilePhoto';
import SideMenu from '../../components/SideMenu';
import Title from '../../components/Title';

import ProfileImage from '../../assets/profile_image.jpg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormInfosInputs {
  username: string;
  email: string;
  currentPassword: string;
  newPassword: string;
}

const schema = yup.object({
  username: yup
    .string()
    .required('Nome é obrigatório')
    .max(16, 'Nome pode ter até 16 caracteres'),
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
  currentPassword: yup.string().required('Senha atual é obrigatório.'),
  newPassword: yup.string().required('Nova senha é obrigatório.'),
});

function UserProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInfosInputs>({
    defaultValues: {
      username: '',
      email: '',
      currentPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInfosInputs> = ({
    username,
    email,
    currentPassword,
    newPassword,
  }: FormInfosInputs) => {
    console.log(email);
  };

  return (
    <BaseTemplate>
      <SideMenu />

      <MobileMenu />
      <S.Container>
        <S.Header>
          <S.TitleContainer>
            <Title>Conta</Title>
          </S.TitleContainer>

          <ProfilePhoto />
        </S.Header>

        <S.MainContent>
          <S.AccountDetails>
            <S.AccountText>Foto</S.AccountText>

            <S.AccountPhoto src={ProfileImage} />

            <S.AccountInfos>
              <S.AccountName>Rafael Noll</S.AccountName>
              <S.AccountEmail>rafael@email.com</S.AccountEmail>

              <Button text="Mudar foto" />
            </S.AccountInfos>
          </S.AccountDetails>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.FormHeader>
              <S.FormTitle>Informações</S.FormTitle>
              <S.ActionButtonsContainer>
                <S.CancelButton>Cancelar</S.CancelButton>
                <S.SaveButton>Salvar</S.SaveButton>
              </S.ActionButtonsContainer>
            </S.FormHeader>

            <S.Separator />

            <S.FieldsContainer>
              <S.InputContainer>
                <S.Label>Nome de usuário</S.Label>
                <Input
                  name="username"
                  register={register}
                  placeholder="Nome do usuário"
                />
                {errors.username && (
                  <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>
                )}
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>E-mail</S.Label>
                <Input
                  name="email"
                  register={register}
                  placeholder="Email da conta"
                  type="email"
                />
                {errors.email && (
                  <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                )}
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>Senha atual</S.Label>

                <Input
                  name="currentPassword"
                  register={register}
                  placeholder="Senha atual"
                  type="password"
                />
                {errors.currentPassword && (
                  <S.ErrorMessage>
                    {errors.currentPassword.message}
                  </S.ErrorMessage>
                )}
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>Nova senha</S.Label>
                <Input
                  name="newPassword"
                  register={register}
                  placeholder="Nova senha"
                  type="password"
                />
                {errors.newPassword && (
                  <S.ErrorMessage>{errors.newPassword.message}</S.ErrorMessage>
                )}
              </S.InputContainer>
            </S.FieldsContainer>
          </S.Form>
        </S.MainContent>
      </S.Container>
    </BaseTemplate>
  );
}

export default UserProfilePage;
