import React from 'react';

import * as S from './styles';
import SearchInput from '../../SearchInput';
import CategoryModal from '../CategoryModal';

import AddIcon from '../../../assets/add-icon.svg';
import useCategoriesSection from './useCategoriesSection';

function CategoriesSection() {
  const {
    createCategory,
    handleCancelModal,
    handleChangeSearchValue,
    handleOpenModal,
    isModalOpen,
    renderCategories,
    searchValue,
  } = useCategoriesSection();

  return (
    <>
      {isModalOpen && (
        <CategoryModal
          title="Criar Categoria"
          onCancel={handleCancelModal}
          onSubmitEvent={createCategory}
        />
      )}

      <S.TopContent>
        <SearchInput
          name="search"
          value={searchValue}
          onChange={handleChangeSearchValue}
          placeholder="Busque por categorias..."
        />
      </S.TopContent>

      <S.MainContent>
        <S.ButtonAdd onClick={handleOpenModal}>
          <AddIcon />
        </S.ButtonAdd>
        <S.Table cellSpacing="0">
          <thead>
            <S.TableRow>
              <th>Nome</th>
              <th>Tarefas</th>
              <th>Ações</th>
            </S.TableRow>
          </thead>
          <S.TableBody>{renderCategories()}</S.TableBody>
        </S.Table>
      </S.MainContent>
    </>
  );
}

export default CategoriesSection;
