import React, { ChangeEvent, useEffect, useState } from 'react';

import * as S from './styles';
import SearchInput from '../../SearchInput';
import { Category } from '../../../interfaces/Category';
import CategoryModal from '../CategoryModal';
import { FormCategoriesInputs } from '../../../interfaces/FormInputs';

import CategoryController from '../../../controllers/CategoryController';
import AddIcon from '../../../assets/add-icon.svg';
import TableCategory from '../TableCategory';

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

  async function createCategory({ name }: FormCategoriesInputs) {
    const categoryCreated = await CategoryController.store({ name });

    if (categoryCreated) {
      setCategories((prevstate) => {
        prevstate.push({
          ...categoryCreated,
          tasks_count: '0',
        });
        return prevstate;
      });
      setIsModalOpen(false);
    }
  }

  async function uptadeCategory({ name }: FormCategoriesInputs, id: string) {
    const updatedCategory = await CategoryController.update({ name }, id);
    if (updatedCategory) {
      setCategories((prevState) =>
        prevState.map((category) => {
          if (category.id === id) {
            return updatedCategory;
          }

          return category;
        }),
      );
    }
  }

  async function deleteCategory(id: string) {
    await CategoryController.delete(id);

    setCategories((prevState) =>
      prevState.filter((category) => category.id !== id),
    );
  }

  function renderCategories() {
    const filtredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (searchValue.length >= 1) {
      return filtredCategories.map((category) => (
        <TableCategory
          key={category.id}
          name={category.name}
          id={category.id}
          tasks_count={category.tasks_count}
          onUpdate={uptadeCategory}
          onDelete={deleteCategory}
        />
      ));
    }

    return categories.map((category) => (
      <TableCategory
        key={category.id}
        name={category.name}
        id={category.id}
        tasks_count={category.tasks_count}
        onUpdate={uptadeCategory}
        onDelete={deleteCategory}
      />
    ));
  }

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await CategoryController.index();
        setCategories(categories);
      } catch (error) {
        setCategories([]);
      }
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
