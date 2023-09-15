"use client";

import { useBoardStore } from "@/state/BoardStore";
import React, { useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleDragComponent = (event: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleDragComponent}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}></div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
