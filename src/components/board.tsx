import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import { IBoard, IColumn } from '../interfaces';
import Column from './column';

function Board() {
  const board = useSelector<IBoard, IBoard>((state) => state)

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <h1>{'oi'}</h1>
        <div className="board">
          {board.columnsOrder.map((id) => (
            <Column
              key={`column-${id}`}
              columnData={board.columns.find((column) => column.id === id) as IColumn}
            />
          ))}
        </div>
      </main>
    </DndProvider>
  );
}

export default Board;
