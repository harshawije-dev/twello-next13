import React from "react";
import { Droppable } from "react-beautiful-dnd";

const Column = ({id, todos, index}: Props) => {
  return <Droppable>{(provided) => <div>Column</div>}</Droppable>;
};

export default Column;
