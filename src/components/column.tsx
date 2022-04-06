import React from 'react';
import { ICard, IColumn } from '../interfaces';
import Card from './card';

type PropTypes = {
  columnData: IColumn;
};

function Column({ columnData }: PropTypes) {
  return (
    <div className="column">
      <h2>{columnData?.title}</h2>
      <ul>
        {columnData?.cardsOrder.map((id) => (
          <Card
            key={`card-${id}`}
            cardData={columnData.cards.find((card) => card.id === id) as ICard}
          />
        ))}
      </ul>
    </div>
  );
}

export default Column;
