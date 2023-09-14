"use client";

import { useBoardStore } from "@/state/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log(board);

  return (
    <>
      <h2>Hello Board Component</h2>
    </>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">

    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;
