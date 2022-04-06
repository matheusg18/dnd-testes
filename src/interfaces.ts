export interface IBoard {
  id: number;
  name: string;
  columns: IColumn[];
  columnsOrder: number[];
}

export interface IColumn {
  id: number;
  title: string;
  cards: ICard[];
  cardsOrder: number[];
}

export interface ICard {
  id: number;
  content: string;
  columnId: number;
}
