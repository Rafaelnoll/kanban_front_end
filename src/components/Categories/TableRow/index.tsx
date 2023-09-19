import React, { useState } from 'react';

import * as S from './styles';

import EditIcon from '../../../assets/edit-icon.svg';
import DeleteIcon from '../../../assets/trash-icon.svg';
import { Category } from '../../../interfaces/Category';
import CategoryModal from '../CategoryModal';
import { FormCategoriesInputs } from '../../../interfaces/FormInputs';

interface TableRowProps extends Category {
  onDelete: (categoryId: string) => void;
  onUpdate: (props: FormCategoriesInputs, id: string) => void;
}

function TableRow({
  name,
  tasks_count,
  id,
  onDelete,
  onUpdate,
}: TableRowProps) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  // Modal Edit
  function handleCloseModalEdit() {
    setIsModalEditOpen(false);
  }

  function handleOpenModalEdit() {
    setIsModalEditOpen(true);
  }

  // Modal Delete
  function handleCloseModalDelete() {
    setIsModalDeleteOpen(false);
  }

  function handleOpenModalDelete() {
    setIsModalDeleteOpen(true);
  }

  // Actions
  function handleUpdateCategory(data: FormCategoriesInputs) {
    onUpdate(data, id);
    handleCloseModalEdit();
  }

  function handleDeleteCategory() {
    onDelete(id);
    handleCloseModalEdit();
  }

  return (
    <>
      <S.TableRow>
        <td className="category_name">{name}</td>
        <td>{tasks_count}</td>
        <td>
          <S.ActionButtonContainer>
            {isModalDeleteOpen ? (
              <>
                <S.CancelButton onClick={handleCloseModalDelete}>
                  Cancelar
                </S.CancelButton>
                <S.DeleteButton onClick={handleDeleteCategory}>
                  Deletar
                </S.DeleteButton>
              </>
            ) : (
              <>
                <S.ActionButton onClick={handleOpenModalEdit}>
                  <EditIcon />
                </S.ActionButton>
                <S.ActionButton onClick={handleOpenModalDelete}>
                  <DeleteIcon />
                </S.ActionButton>
              </>
            )}
          </S.ActionButtonContainer>
        </td>
        <td style={{ width: '0%', padding: '0' }}>
          <CategoryModal
            onCancel={handleCloseModalEdit}
            title="Modificar Categoria"
            initialData={{
              name,
            }}
            visible={isModalEditOpen}
            onSubmitEvent={handleUpdateCategory}
          />
        </td>
      </S.TableRow>
    </>
  );
}

export default TableRow;
