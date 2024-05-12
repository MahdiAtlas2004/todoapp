import React from "react";
import "./Todos.css"

const Todos = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button onClick={() => {deleteTodo(todo.id)}} className="delete-btn">Delete</button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );
  return (
  <div className="collection todos">
    {todosList}
  </div>
  );
};

export default Todos;
