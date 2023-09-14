"use client";

import { useBoardStore } from "@/state/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const board = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    board();
  }, [board]);

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
