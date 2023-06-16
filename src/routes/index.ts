import React, { FunctionComponent } from 'react';

import BoardsIcon from '../assets/board-icon.svg';

interface IRoute {
  path: string;
  name: string;
  icon: FunctionComponent<React.SVGAttributes<SVGElement>> | null;
}

export default [
  {
    path: '#',
    name: 'Boards',
    icon: BoardsIcon,
  },
] as IRoute[];
