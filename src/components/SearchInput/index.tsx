import React, { ChangeEvent, useRef } from 'react';

import * as S from './styles';
import SearchIcon from '../../assets/search-icon.svg';

interface InputProp {
  placeholder?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function SearchInput({ placeholder, name, value, onChange }: InputProp) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClickOnInput() {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }

  return (
    <S.Container onClick={handleClickOnInput}>
      <SearchIcon />
      <S.Input
        placeholder={placeholder}
        ref={inputRef}
        name={name}
        value={value}
        onChange={(event) => onChange(event)}
      />
    </S.Container>
  );
}

export default SearchInput;
