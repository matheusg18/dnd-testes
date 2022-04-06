import React, { useRef } from 'react';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { IBoard, ICard, IColumn } from '../interfaces';
import { moveCard } from '../redux/actions';

type PropType = {
  cardData: ICard;
};

function Card({ cardData }: PropType) {
  const board = useSelector<IBoard, IBoard>((state) => state);
  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { id: cardData?.id, columnId: cardData?.columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<ICard>({
    accept: 'CARD',
    hover(item, monitor) {
      if (!ref.current) return;
      if (item.id === cardData?.id) return;

      const dragColumn = board.columns.find((column) => column.id === item.columnId) as IColumn;
      const dragIndex = dragColumn.cardsOrder.findIndex((id) => id === item.id);

      const hoverColumn = board.columns.find((column) => column.id === cardData.columnId) as IColumn;
      const hoverIndex = hoverColumn.cardsOrder.findIndex((id) => id === cardData.id);

      if (dragIndex < 0 || hoverIndex < 0) return;
      // console.log(dragIndex, hoverIndex);

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      // console.log('hover', hoverMiddleY, hoverClientY);

      dispatch(moveCard({
        card: dragColumn.cards.find((c) => c.id === item.id) as ICard,
        toIndex: hoverIndex,
      }));

      // eslint-disable-next-line no-param-reassign
      // item.index = hoverIndex;
    },
  });

  dropRef(dragRef(ref));

  return (
    <div ref={ref} className="card" style={{ opacity: isDragging ? 0 : 1 }}>
      {cardData?.content}
    </div>
  );
}

export default Card;
