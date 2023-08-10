import React, { useEffect, useState } from 'react';

import FilterIcon from '../../assets/filter-icon.svg';
import SelectedIcon from '../../assets/selected-icon.svg';

import Button from '../Button';
import * as S from './styles';
import { Category } from '../../interfaces/Category';
import CategoryController from '../../controllers/CategoryController';
import { Link } from 'react-router-dom';

interface ButtonFilterProps {
  initialCategories?: Category[];
  selectedCategory: string;
  onSelectCategory: (categorySelected: string) => void;
}

function ButtonFilterCategories({
  initialCategories,
  onSelectCategory,
  selectedCategory,
}: ButtonFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const allCategories = await CategoryController.index();
      setCategories(allCategories);
    }

    if (initialCategories) {
      setCategories(initialCategories);
      return;
    }

    loadCategories();
  }, []);

  function handleOpenAndCloseList() {
    setIsListOpen((prevState) => !prevState);
  }

  return (
    <S.Container>
      <Button
        handleClick={handleOpenAndCloseList}
        responsive="true"
        text="Filtrar"
        icon={FilterIcon}
      />
      {isListOpen && (
        <S.List>
          {categories.length === 0 ? (
            <S.WithoutCategories>
              <S.ListItemText>Nenhuma categoria!</S.ListItemText>
              <Link to="/categories">Criar nova</Link>
            </S.WithoutCategories>
          ) : (
            categories.map((category) => {
              const isCategorySelected =
                selectedCategory.toLowerCase() === category.name.toLowerCase();

              return (
                <S.ListItem
                  onClick={() => onSelectCategory(category.name)}
                  key={category.id}
                  selected={isCategorySelected}
                >
                  <S.IconContainer selected={isCategorySelected}>
                    <SelectedIcon />
                  </S.IconContainer>
                  <S.ListItemText>{category.name}</S.ListItemText>
                </S.ListItem>
              );
            })
          )}
        </S.List>
      )}
    </S.Container>
  );
}

export default ButtonFilterCategories;
