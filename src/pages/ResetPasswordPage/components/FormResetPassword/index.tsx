import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import UserController from '../../../../controllers/UserController';
import { passwordRegex } from '../../../../utils/passwordRegex';
import { useQuery } from '../../../../hooks/useQuery';

interface FormResetPasswordInputs {
  new_password: string;
  new_password_confirmation: string;
}
const schema = yup.object({
  new_password: yup
    .string()
    .required('Senha é obrigatório.')
    .min(8, 'Senha deve conter entre 8 e 16 caracteres.')
    .max(16, 'Senha deve conter entre 8 e 16 caracteres.')
    .matches(passwordRegex, {
      message:
        'Senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.',
    }),
  new_password_confirmation: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('new_password')], 'Senhas devem ser iguais'),
});

export function FormResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormResetPasswordInputs>({
    defaultValues: {
      new_password: '',
      new_password_confirmation: '',
    },
    resolver: yupResolver(schema),
  });

  const query = useQuery();

  const onSubmit: SubmitHandler<FormResetPasswordInputs> = ({
    new_password,
    new_password_confirmation,
  }: FormResetPasswordInputs) => {
    const token = query.get('token') as string;

    UserController.resetUserPassword({
      new_password,
      new_password_confirmation,
      token,
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Confirme a nova senha"
          type="password"
        />
        {errors.new_password_confirmation && (
          <S.ErrorMessage>
            {errors.new_password_confirmation.message}
          </S.ErrorMessage>
        )}
      </S.InputContainer>

      <Button text="Alteral senha" type="submit" />

      <S.SmallText>
        Lembra da senha? <S.FormLink to="/login">Login</S.FormLink>
      </S.SmallText>
    </S.Form>
  );
}
