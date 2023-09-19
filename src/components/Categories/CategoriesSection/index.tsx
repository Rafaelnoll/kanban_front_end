import React from 'react';

import * as S from './styles';
import SearchInput from '../../SearchInput';
import CategoryModal from '../CategoryModal';

import AddIcon from '../../../assets/add-icon.svg';
import useCategoriesSection from './useCategoriesSection';
import Pagination from './components/Pagination';

function CategoriesSection() {
  const {
    createCategory,
    handleCancelModal,
    handleChangeSearchValue,
    handleOpenModal,
    isModalOpen,
    renderCategories,
    searchValue,
    page,
    handleNextPage,
    handlePreviousPage,
    totalOfPages,
  } = useCategoriesSection();

  return (
    <>
      <CategoryModal
        title="Criar Categoria"
        onCancel={handleCancelModal}
        onSubmitEvent={createCategory}
        visible={isModalOpen}
      />

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
          <span>Criar Categoria</span>
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

      {totalOfPages !== 0 && (
        <Pagination
          pageNumber={page}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          totalOfPages={totalOfPages}
        />
      )}
    </>
  );
}

export default CategoriesSection;
