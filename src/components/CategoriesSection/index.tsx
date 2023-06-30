import React, { ChangeEvent, useEffect, useState } from 'react';

import * as S from './styles';
import Button from '../Button';
import SearchInput from '../SearchInput';
import { Category } from '../../interfaces/Category';
import CategoryModal from '../CategoryModal';
import { FormCategoriesInputs } from '../../interfaces/FormInputs';

import FilterIcon from '../../assets/filter-icon.svg';
import CategoryController from '../../controllers/CategoryController';
import DeleteIcon from '../../assets/trash-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import AddIcon from '../../assets/add-icon.svg';

function CategoriesSection() {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChangeSearchValue(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCancelModal() {
    setIsModalOpen(false);
  }

  function createCategory(data: FormCategoriesInputs) {
    console.log(data);
  }

  useEffect(() => {
    async function loadCategories() {
      const categories = await CategoryController.index();
      setCategories(categories);
    }

    loadCategories();
  }, []);

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
        <Button responsive="true" text="Filtrar" icon={FilterIcon} />
        <SearchInput
          name="search"
          value={searchValue}
          onChange={handleChangeSearchValue}
          placeholder="Busque por cards, assuntos ou responsáveis..."
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
          <S.TableBody>
            {categories.map((category) => (
              <S.TableRow key={category.id}>
                <td>{category.name}</td>
                <td>{category.tasks_count}</td>
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
            ))}
          </S.TableBody>
        </S.Table>
      </S.MainContent>
    </>
  );
}

export default CategoriesSection;
