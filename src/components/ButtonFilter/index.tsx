import React from 'react';

import FilterIcon from '../../assets/filter-icon.svg';

import Button from '../Button';
import * as S from './styles';
import { Category } from '../../interfaces/Category';
import CategoriesList from './components/CategoriesList';
import useButtonFilter from './useButtonFilter';

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
  const { categories, isListOpen, handleOpenAndCloseList } =
    useButtonFilter(initialCategories);

  return (
    <S.Container>
      <Button
        handleClick={handleOpenAndCloseList}
        responsive="true"
        text="Filtrar"
        icon={FilterIcon}
      />

      <CategoriesList
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
        visible={isListOpen}
      />
    </S.Container>
  );
}

export default ButtonFilterCategories;
