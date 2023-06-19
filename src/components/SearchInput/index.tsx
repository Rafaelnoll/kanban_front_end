import React, { useRef } from 'react';

import * as S from './styles';
import SearchIcon from '../../assets/search-icon.svg';

interface InputProp {
  placeholder?: string;
}

function SearchInput({ placeholder }: InputProp) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClickOnInput() {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }

  return (
    <S.Container onClick={handleClickOnInput}>
      <SearchIcon />
      <S.Input placeholder={placeholder} ref={inputRef} />
    </S.Container>
  );
}

export default SearchInput;
