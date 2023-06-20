import React, { FunctionComponent, Ref, RefObject } from 'react';

import * as S from './styles';

import { Category } from '../../interfaces/Category';

interface SelectorProps {
  icon?: FunctionComponent<React.SVGAttributes<SVGElement>>;
  defaultValue: string;
  categories: Category[];
}

// eslint-disable-next-line react/display-name
const Selector = React.forwardRef(
  (
    { icon: Icon, defaultValue, categories = [] }: SelectorProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    return (
      <S.Container>
        {Icon && <Icon />}
        <S.Selector ref={ref as RefObject<HTMLSelectElement>}>
          <S.Option value="">{defaultValue}</S.Option>
          {categories.map((category: Category) => (
            <S.Option value={category.id} key={category.id}>
              {category.name}
            </S.Option>
          ))}
        </S.Selector>
      </S.Container>
    );
  },
);

export default Selector;
