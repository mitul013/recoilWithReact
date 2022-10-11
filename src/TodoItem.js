import { useEffect } from "react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "./atom/atom";

const TodoItem = ({ todo: { title, id, status } }) => {
  const setTodos = useSetRecoilState(todoState);

  useEffect(() => {
    console.log(title + " In am re-rendring");
  });

  function changeHanlder(property, value) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, [property]: value };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <div>
      <input
        value={title}
        onChange={({ target: { value: title } }) => {
          changeHanlder("title", title);
        }}
      />
      <input
        type="checkbox"
        checked={status === "Completed"}
        onChange={({ target: { checked: status } }) => {
          changeHanlder("status", status ? "Completed" : "InComplete");
        }}
      />
    </div>
  );
};

export default React.memo(TodoItem);
