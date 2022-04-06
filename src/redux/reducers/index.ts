import { board } from '../../data';
import { ICard } from '../../interfaces';
import { MOVE_CARD } from '../actions';

interface IType {
  type: string;
  payload: { card: ICard; toIndex: number };
}

const reducer = (state = board, { type, payload }: IType) => {
  switch (type) {
    case MOVE_CARD: {
      const clone = { ...state };
      const { card, toIndex } = payload;
      const columnIndex = clone.columns.findIndex((c) => c.id === card.columnId);
      const changedCardsOrder = clone.columns[columnIndex].cardsOrder.reduce<number[]>(
        (acc, id, index) => {
          console.log(acc, id, index);
          if (id === card.id) return acc;
          if (index === toIndex) return [...acc, id, card.id];
          return [...acc, id];
        },
        []
      );

      console.log(changedCardsOrder);

      clone.columns[columnIndex].cardsOrder = changedCardsOrder;

      console.log(clone.columns[columnIndex].cardsOrder);

      return clone;
    }

    default:
      return state;
  }
};

export default reducer;
