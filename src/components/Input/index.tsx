/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import * as S from './styles';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  asTextarea?: boolean;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
}

// eslint-disable-next-line react/display-name
const Input = ({
  asTextarea = false,
  placeholder = '',
  register,
  name,
}: InputProps) => {
  if (asTextarea) {
    return (
      <S.Textarea
        maxLength={500}
        placeholder={placeholder}
        {...register(name)}
      />
    );
  }

  return <S.Input placeholder={placeholder} {...register(name)} />;
};
export default Input;
