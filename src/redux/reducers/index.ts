import { board as boardData } from '../../data';
import { ICard, IColumn } from '../../interfaces';
import { CAN_MOVE, MOVE_CARD } from '../actions';

interface IType {
  type: string;
  payload: any;
}

type MoveCardPayload = { card: ICard; toIndex: number };
type CanMovePayload = boolean;

const reducer = (state = boardData, action: IType) => {
  const { board, columns, cards, canMove } = state;
  const { type, payload } = action;

  switch (type) {
    case MOVE_CARD: {
      const { card, toIndex } = payload as MoveCardPayload;
      const reduce = (acc: number[], id: number, index: number) => {
        if (id === card.id) return acc;
        if (index === toIndex) return [...acc, id, card.id];
        return [...acc, id];
      };

      const map = (column: IColumn) => {
        if (column.id === card.columnId) {
          return { ...column, cardsOrder: column.cardsOrder.reduce(reduce, []) };
        }
        return column;
      };

      console.log('reducer');
      console.log('state', state);
      console.log('action', action);
      console.log('retorno', {
        canMove,
        board,
        cards,
        columns: columns.map(map),
      });

      return {
        canMove: true,
        board,
        cards,
        columns: columns.map(map),
      };
    }

    case CAN_MOVE:
      return { ...state, canMove: payload as CanMovePayload };

    default:
      return state;
  }
};

export default reducer;
