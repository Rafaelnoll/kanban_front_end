import React, { ReactNode } from 'react';

import * as S from './styles';

interface TableProps {
  onRenderCategories: () => ReactNode;
}

function Table({ onRenderCategories }: TableProps) {
  return (
    <S.Table>
      <thead>
        <S.TableRow>
          <th>Nome</th>
          <th>Tarefas</th>
          <th>Ações</th>
        </S.TableRow>
      </thead>
      <S.TableBody>{onRenderCategories()}</S.TableBody>
    </S.Table>
  );
}

export default Table;
