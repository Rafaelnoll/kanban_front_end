import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import Button from '../../Button';
import Input from '../../Input';
import UserController from '../../../controllers/UserController';
import formatSecondsToMinutes from '../../../utils/formatSecondsToMinutes';

interface FormForgotPasswordInputs {
  email: string;
}

const schema = yup.object({
  email: yup.string().required('Email é obrigatório.').email('E-mail inválido'),
});

const initialTimerDurationInSeconds = 5;

export function FormForgotPassword() {
  const [isButtonEnable, setIsButtonEnable] = useState(true);
  const [timerDurationInSeconds, setTimerDurationInSeconds] = useState<number>(
    initialTimerDurationInSeconds,
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);

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

  const handleStartTimer = () => {
    return setInterval(() => {
      setTimerDurationInSeconds((prevState) => prevState - 1);
    }, 1000);
  };

  const onSubmit: SubmitHandler<FormForgotPasswordInputs> = ({
    email,
  }: FormForgotPasswordInputs) => {
    setIsButtonEnable(false);
    setIsTimerRunning(true);
    UserController.sendEmailToResetPassword(email);
  };

  useEffect(() => {
    if (!isTimerRunning) return;

    const timerInterval = handleStartTimer();

    if (timerDurationInSeconds === 0) {
      clearInterval(timerInterval);
      setIsTimerRunning(false);
      setIsButtonEnable(true);
      setTimerDurationInSeconds(initialTimerDurationInSeconds);
    }

    return () => clearInterval(timerInterval);
  }, [timerDurationInSeconds, isTimerRunning]);

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

      <Button
        disabled={!isButtonEnable}
        text={
          isTimerRunning
            ? `Aguarde ${formatSecondsToMinutes(timerDurationInSeconds)}`
            : 'Enviar E-mail'
        }
        type="submit"
      />

      <S.SmallText>
        Lembra da senha? <S.FormLink to="/login">Login</S.FormLink>
      </S.SmallText>
    </S.Form>
  );
}
