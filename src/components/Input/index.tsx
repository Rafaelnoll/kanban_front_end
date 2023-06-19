import React from 'react';

import * as S from './styles';

interface InputProps {
  asTextarea?: boolean;
  placeholder?: string;
}

function Input({ asTextarea = false, placeholder = '' }: InputProps) {
  if (asTextarea) {
    return <S.Textarea placeholder={placeholder} />;
  }

  return <S.Input placeholder={placeholder} />;
}

export default Input;
