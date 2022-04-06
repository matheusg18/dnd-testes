export interface IData {
  canMove: boolean;
  board: IBoard;
  columns: IColumn[];
  cards: ICard[];
}

export interface IBoard {
  id: number;
  name: string;
  columnsOrder: number[];
}

export interface IColumn {
  id: number;
  title: string;
  cardsOrder: number[];
}

export interface ICard {
  id: number;
  content: string;
  columnId: number;
}
