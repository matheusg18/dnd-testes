import React from 'react';
import { useSelector } from 'react-redux';
import { ICard, IColumn, IData } from '../interfaces';
import Card from './card';

type PropTypes = {
  columnData: IColumn;
};

function Column({ columnData }: PropTypes) {
  const { cards } = useSelector<IData, IData>((state) => state);

  return (
    <div className="column">
      <h2>{columnData.title}</h2>
      <ul>
        {columnData.cardsOrder.map((id) => (
          <Card key={`card-${id}`} cardData={cards.find((card) => card.id === id) as ICard} />
        ))}
      </ul>
    </div>
  );
}

export default Column;
