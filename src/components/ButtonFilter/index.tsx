import React, { useEffect, useState } from 'react';

import FilterIcon from '../../assets/filter-icon.svg';
import SelectedIcon from '../../assets/selected-icon.svg';

import Button from '../Button';
import * as S from './styles';
import { Category } from '../../interfaces/Category';
import CategoryController from '../../controllers/CategoryController';

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
          {categories.map((category) => (
            <S.ListItem
              onClick={() => onSelectCategory(category.name)}
              key={category.id}
            >
              <S.IconContainer
                selected={
                  selectedCategory.toLowerCase() === category.name.toLowerCase()
                }
              >
                <SelectedIcon />
              </S.IconContainer>
              <S.ListItemText>{category.name}</S.ListItemText>
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.Container>
  );
}

export default ButtonFilterCategories;
