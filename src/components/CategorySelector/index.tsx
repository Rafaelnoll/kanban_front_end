import React, { FunctionComponent } from 'react';

import * as S from './styles';

import { Category } from '../../interfaces/Category';

interface SelectorProps {
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
  defaultValue: string;
  categories: Category[];
}

function Selector({
  icon: Icon,
  defaultValue,
  categories = [],
}: SelectorProps) {
  return (
    <S.Container>
      {Icon && <Icon />}
      <S.Selector>
        <S.Option value="">{defaultValue}</S.Option>
        {categories.map((category: Category) => (
          <S.Option value={category.id} key={category.id}>
            {category.name}
          </S.Option>
        ))}
      </S.Selector>
    </S.Container>
  );
}

export default Selector;
