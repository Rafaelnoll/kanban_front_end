import React, { FunctionComponent } from 'react';

import * as S from './styles';

import { Category } from '../../interfaces/Category';
import { Path, UseFormRegister } from 'react-hook-form';

interface IFormInput {
  title: string;
  description: string;
  category: string;
}
interface SelectorProps {
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
  defaultValue: string;
  categories: Category[];
  name: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
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
