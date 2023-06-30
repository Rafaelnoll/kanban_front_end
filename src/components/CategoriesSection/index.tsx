import React, { ChangeEvent, useEffect, useState } from 'react';

import * as S from './styles';
import Button from '../Button';
import SearchInput from '../SearchInput';
import { Category } from '../../interfaces/Category';

import FilterIcon from '../../assets/filter-icon.svg';
import CategoryController from '../../controllers/CategoryController';
import DeleteIcon from '../../assets/trash-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';

function CategoriesSection() {
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

  function handleChangeSearchValue(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
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
      <S.TopContent>
        <Button responsive="true" text="Filtrar" icon={FilterIcon} />
        <SearchInput
          name="search"
          value={searchValue}
          onChange={handleChangeSearchValue}
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </S.TopContent>

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
    </>
  );
}

export default CategoriesSection;
