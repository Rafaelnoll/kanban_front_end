import React, { FunctionComponent } from 'react';

import BoardsIcon from '../assets/board-icon.svg';
import CategoriesIcon from '../assets/category-icon.svg';

interface IRoute {
  path: string;
  name: string;
  icon: FunctionComponent<React.SVGAttributes<SVGElement>> | null;
}

export default [
  {
    path: '/dashboard',
    name: 'Boards',
    icon: BoardsIcon,
  },
  {
    path: '/categories',
    name: 'Categorias',
    icon: CategoriesIcon,
  },
] as IRoute[];
