import React from "react";

// The Todo class acts as a class and also as a type
import Todo from "./models/todo";
import Todos from "./components/Todos";

function App() {
  const todos = [new Todo("1"), new Todo("2")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
