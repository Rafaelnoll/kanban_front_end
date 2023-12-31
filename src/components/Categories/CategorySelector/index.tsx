/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import * as S from './styles';

import { Category } from '../../../interfaces/Category';
import { UseFormRegister } from 'react-hook-form';

interface SelectorProps {
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
  defaultValue: string;
  categories: Category[];
  name: string;
  register: UseFormRegister<any>;
}

const CategorySelector = ({
  icon: Icon,
  defaultValue,
  categories = [],
  register,
  name,
}: SelectorProps) => {
  const [defaultCategory, setDefaultCategory] = useState(defaultValue);

  function handleChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
    setDefaultCategory(event.target.value);
  }

  return (
    <S.Container>
      {Icon && <Icon />}
      <S.Selector
        value={defaultCategory ? defaultCategory : ''}
        {...register(name, {
          onChange: handleChangeCategory,
        })}
      >
        <S.Option value="">Sem categoria</S.Option>
        {categories.map((category: Category) => (
          <S.Option value={category.id} key={category.id}>
            {category.name}
          </S.Option>
        ))}
      </S.Selector>
    </S.Container>
  );
};
export default CategorySelector;
