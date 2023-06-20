/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';

import * as S from './styles';

import { Category } from '../../interfaces/Category';
import { UseFormRegister } from 'react-hook-form';

interface SelectorProps {
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
  defaultValue: string;
  categories: Category[];
  name: string;
  register: UseFormRegister<any>;
}

const Selector = ({
  icon: Icon,
  defaultValue,
  categories = [],
  register,
  name,
}: SelectorProps) => {
  return (
    <S.Container>
      {Icon && <Icon />}
      <S.Selector {...register(name)}>
        <S.Option value="">{defaultValue}</S.Option>
        {categories.map((category: Category) => (
          <S.Option value={category.id} key={category.id}>
            {category.name}
          </S.Option>
        ))}
      </S.Selector>
    </S.Container>
  );
};
export default Selector;
