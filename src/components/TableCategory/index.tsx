import React, { useState } from 'react';

import * as S from './styles';
import EditIcon from '../../assets/edit-icon.svg';
import DeleteIcon from '../../assets/trash-icon.svg';
import { Category } from '../../interfaces/Category';
import CategoryModal from '../CategoryModal';
import { FormCategoriesInputs } from '../../interfaces/FormInputs';

interface TableCategoryProps extends Category {
  onDelete: (categoryId: string) => void;
  onUpdate: (props: FormCategoriesInputs, id: string) => void;
}

function TableCategory({
  name,
  tasks_count,
  id,
  onDelete,
  onUpdate,
}: TableCategoryProps) {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  function handleModalClose() {
    setIsModalEditOpen(false);
  }

  function handleModalOpen() {
    setIsModalEditOpen(true);
  }

  function handleUpdateCategory(data: FormCategoriesInputs) {
    onUpdate(data, id);
    handleModalClose();
  }

  function handleDeleteCategory() {
    onDelete(id);
    handleModalClose();
  }

  return (
    <>
      <S.TableRow>
        <td>{name}</td>
        <td>{tasks_count}</td>
        <td>
          <S.ActionButtonContainer>
            <S.ActionButton onClick={handleModalOpen}>
              <EditIcon />
            </S.ActionButton>
            <S.ActionButton onClick={handleDeleteCategory}>
              <DeleteIcon />
            </S.ActionButton>
          </S.ActionButtonContainer>
        </td>
        {isModalEditOpen && (
          <td style={{ width: '0%', padding: '0' }}>
            <CategoryModal
              onCancel={handleModalClose}
              title="Modificar Categoria"
              initialData={{
                name,
              }}
              onSubmitEvent={handleUpdateCategory}
            />
          </td>
        )}
      </S.TableRow>
    </>
  );
}

export default TableCategory;
