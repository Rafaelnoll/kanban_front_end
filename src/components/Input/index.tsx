import React from 'react';

import * as S from './styles';
import { Path, UseFormRegister } from 'react-hook-form';

interface IFormInput {
  title: string;
  description: string;
  category: string;
}

interface InputProps {
  asTextarea?: boolean;
  placeholder?: string;
  name: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
}

// eslint-disable-next-line react/display-name
const Input = ({
  asTextarea = false,
  placeholder = '',
  register,
  name,
}: InputProps) => {
  if (asTextarea) {
    return <S.Textarea placeholder={placeholder} {...register(name)} />;
  }

  return <S.Input placeholder={placeholder} {...register(name)} />;
};
export default Input;
