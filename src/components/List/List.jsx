import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

import { useSelector } from "react-redux";

const List = () => {
  const { tasks } = useSelector((state) => state.trello);

  return (
    <ListTrello>
      {tasks.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ListTrello>
  );
};

const ListTrello = styled("ul")`
 display: flex;
 height: 100%;
 
color: aliceblue;
margin-top: 15px;

`;

export default List;
