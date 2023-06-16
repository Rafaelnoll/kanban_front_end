import React from 'react';

import * as S from './styles';

interface TaskProps {
  title: string;
  description?: string;
  category?: string;
}

function Task({ title, description = '', category = '' }: TaskProps) {
  return (
    <S.Container>
      <S.TaskTitle>{title}</S.TaskTitle>

      {description ? (
        <S.Description>{description}</S.Description>
      ) : (
        <S.Description>Sem descrição...</S.Description>
      )}

      {category && (
        <S.CategoryContainer>
          <S.Category>{category}</S.Category>
        </S.CategoryContainer>
      )}
    </S.Container>
  );
}

export default Task;
