import { ICard } from '../../interfaces';

export const MOVE_CARD = 'MOVE_CARD';
export const CAN_MOVE = 'CAN_MOVE';

type Action<T> = (payload: T) => { type: string; payload: T };

export const moveCard: Action<{ card: ICard; toIndex: number }> = (payload) => ({
  type: MOVE_CARD,
  payload,
});
