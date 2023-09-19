import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import { Category } from '../../../../interfaces/Category';
import SelectedIcon from '../../../../assets/selected-icon.svg';
import useAnimatedUnmount from '../../../../hooks/useAnimatedUnmount';

interface CategoriesListProps {
  visible: boolean;
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export default function CategoriesList({
  visible,
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoriesListProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount({ visible });

  if (!shouldRender) {
    return null;
  }

  return (
    <S.List $isVisible={!visible} ref={animatedElementRef}>
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
  );
}
