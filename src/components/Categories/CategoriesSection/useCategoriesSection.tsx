import React, { useState, ChangeEvent, useEffect } from 'react';

import { Category } from '../../../interfaces/Category';
import { FormCategoriesInputs } from '../../../interfaces/FormInputs';

import CategoryController from '../../../controllers/CategoryController';
import TableRow from '../TableRow';

function useCategoriesSection() {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(0);

  const categoriesPerPage = 6;

  const filtredCategories =
    searchValue.length >= 1
      ? categories.filter((category) =>
          category.name.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : categories;

  const totalOfPages = Math.ceil(filtredCategories.length / categoriesPerPage);

  function handleChangeSearchValue(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCancelModal() {
    setIsModalOpen(false);
  }

  function handleNextPage() {
    if (page + 1 < totalOfPages) {
      setPage((prevState) => prevState + 1);
    }
  }

  function handlePreviousPage() {
    if (page > 0) {
      setPage((prevState) => prevState - 1);
    }
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
    return filtredCategories
      .slice(categoriesPerPage * page, categoriesPerPage * (page + 1))
      .map((category) => (
        <TableRow
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

  return {
    isModalOpen,
    handleCancelModal,
    createCategory,
    searchValue,
    handleChangeSearchValue,
    handleOpenModal,
    renderCategories,
    page,
    handleNextPage,
    handlePreviousPage,
    totalOfPages,
  };
}

export default useCategoriesSection;
