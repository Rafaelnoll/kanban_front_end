import React from 'react';

import * as S from './styles';
import EditIcon from '../../assets/edit-icon.svg';
import DeleteIcon from '../../assets/trash-icon.svg';
import { Category } from '../../interfaces/Category';

function TableCategory({ name, tasks_count }: Category) {
  return (
    <S.TableRow>
      <td>{name}</td>
      <td>{tasks_count}</td>
      <td>
        <S.ActionButtonContainer>
          <S.ActionButton>
            <EditIcon />
          </S.ActionButton>
          <S.ActionButton>
            <DeleteIcon />
          </S.ActionButton>
        </S.ActionButtonContainer>
      </td>
    </S.TableRow>
  );
}

export default TableCategory;
