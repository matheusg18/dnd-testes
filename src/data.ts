import { IData } from './interfaces';

export const board: IData = {
  canMove: true,
  board: {
    id: 1,
    name: 'Board de teste',
    columnsOrder: [1, 2, 3],
  },
  columns: [
    {
      id: 1,
      title: 'Para fazer',
      cardsOrder: [1, 2, 3, 4],
    },
    {
      id: 2,
      title: 'Fazendo',
      cardsOrder: [5, 6],
    },
    {
      id: 3,
      title: 'Feito',
      cardsOrder: [7],
    },
  ],
  cards: [
    { id: 1, columnId: 1, content: 'ReactDnD' },
    { id: 2, columnId: 1, content: 'Auth0' },
    { id: 3, columnId: 1, content: 'Cypress' },
    { id: 4, columnId: 1, content: 'Testes no Front' },
    { id: 5, columnId: 2, content: 'Front End' },
    { id: 6, columnId: 2, content: 'Back End' },
    { id: 7, columnId: 3, content: 'Mentoria Summer' },
  ],
};
