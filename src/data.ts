import { IBoard } from './interfaces';

export const board: IBoard = {
  id: 1,
  name: 'Board de teste',
  columns: [
    {
      id: 1,
      title: 'Para fazer',
      cards: [
        { id: 1, columnId: 1, content: 'ReactDnD' },
        { id: 2, columnId: 1, content: 'Auth0' },
        { id: 3, columnId: 1, content: 'Cypress' },
        { id: 4, columnId: 1, content: 'Testes no Front' },
      ],
      cardsOrder: [1, 2, 3, 4],
    },
    {
      id: 2,
      title: 'Fazendo',
      cards: [
        { id: 5, columnId: 2, content: 'Front End' },
        { id: 6, columnId: 2, content: 'Back End' },
      ],
      cardsOrder: [5, 6],
    },
    {
      id: 3,
      title: 'Feito',
      cards: [],
      cardsOrder: [],
    },
  ],
  columnsOrder: [1, 2, 3],
};
