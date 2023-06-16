import React, { useRef } from 'react';

import * as S from './styles';
import SearchIcon from '../../assets/search-icon.svg';

interface InputProp {
  placeholder?: string;
}

function Input({ placeholder }: InputProp) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClickOnInput() {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }

  return (
    <S.Container onClick={handleClickOnInput}>
      <S.Icon src={SearchIcon as unknown as string} />
      <S.Input placeholder={placeholder} ref={inputRef} />
    </S.Container>
  );
}

export default Input;