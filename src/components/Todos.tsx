import React from "react";

import Todo from "../models/todo";
import TodoComponent from "./Todo";

// React.FC specifies that Todos is a React Functional Component
// In <>, we define our own props
// if items is not passed or is passed but it is not a string array, we will get an error
// to make items, optional, add a '?' after e.g. React.FC<{ items?: string[] }>
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // after changing to items: Todo[], we are saying that items will be an array of objects that meets the Todo class definition
  return (
    <ul>
      {props.items.map((item) => (
        <TodoComponent key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
