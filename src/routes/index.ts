import BoardsIcon from '../assets/board-icon.svg';

interface IRoute {
  path: string;
  name: string;
  icon: string | null;
}

export default [
  {
    path: '#',
    name: 'Boards',
    icon: BoardsIcon as unknown as string,
  },
] as IRoute[];
