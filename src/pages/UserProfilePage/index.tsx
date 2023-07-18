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
import useAuthentication from '../../hooks/useAuthentication';
import UserController from '../../controllers/UserController';

interface FormInfosInputs {
  username: string;
  email: string;
  description: string | undefined;
}

const schema = yup.object({
  username: yup
    .string()
    .required('Nome é obrigatório')
    .max(16, 'Nome pode ter até 16 caracteres'),
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
  description: yup
    .string()
    .optional()
    .max(200, 'O campo excedeu o limite de caracteres permitido(200).'),
});

function UserProfilePage() {
  const { user, handleUpdateUser } = useAuthentication();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInfosInputs>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      description: user?.description,
    },
    resolver: yupResolver(schema),
  });

  const handleCancel = () => {
    reset({
      username: user?.username,
      email: user?.email,
      description: user?.description,
    });
  };

  const onSubmit: SubmitHandler<FormInfosInputs> = async ({
    username,
    email,
    description,
  }: FormInfosInputs) => {
    if (user) {
      const uptadedUser = await UserController.updateInfo(
        { username, email, description },
        user.id,
      );
      handleUpdateUser(uptadedUser);
    }
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
              <S.AccountName>{user?.username}</S.AccountName>
              <S.AccountEmail>{user?.email}</S.AccountEmail>
              <S.AccountDescription>{user?.description}</S.AccountDescription>

              <Button text="Mudar foto" />
            </S.AccountInfos>
          </S.AccountDetails>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.FormHeader>
              <S.FormTitle>Informações</S.FormTitle>
              <S.ActionButtonsContainer>
                <S.CancelButton type="button" onClick={handleCancel}>
                  Cancelar
                </S.CancelButton>
                <S.SaveButton type="submit">Salvar</S.SaveButton>
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
            </S.FieldsContainer>

            <S.FormHeader>
              <S.FormTitle>Sobre Mim</S.FormTitle>
            </S.FormHeader>

            <S.Separator />

            <S.FieldsContainer>
              <S.InputContainer>
                <Input
                  name="description"
                  register={register}
                  placeholder="Descrição sobre você..."
                  asTextarea
                />
                {errors.description && (
                  <S.ErrorMessage>{errors.description.message}</S.ErrorMessage>
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
