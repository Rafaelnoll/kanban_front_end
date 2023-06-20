import React, { Ref, RefObject } from 'react';

import * as S from './styles';

interface InputProps {
  asTextarea?: boolean;
  placeholder?: string;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  (
    { asTextarea = false, placeholder = '' }: InputProps,
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (asTextarea) {
      return (
        <S.Textarea
          placeholder={placeholder}
          ref={ref as RefObject<HTMLTextAreaElement>}
        />
      );
    }

    return (
      <S.Input
        placeholder={placeholder}
        ref={ref as RefObject<HTMLInputElement>}
      />
    );
  },
);

export default Input;
