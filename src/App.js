import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";
import { filterState, todoState } from "./atom/atom";
import { filteredTodos } from "./selector/selector";
import "./styles.css";
import TodoItem from "./TodoItem";

export default function App() {
  const setTodos = useSetRecoilState(todoState);
  const todos = useRecoilValue(filteredTodos);
  const [newTodo, setNewTodo] = useState({ title: "", status: "InComplete" });
  const setFilter = useSetRecoilState(filterState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <input
          value={newTodo.title}
          onChange={({ target: { value: title } }) =>
            setNewTodo({ title, status: "InComplete", id: uuid() })
          }
        />
        <button
          disabled={newTodo.title === ""}
          onClick={() => {
            setTodos((todos) => [...todos, newTodo]);
            setNewTodo({ title: "", status: "InComplete" });
          }}
        >
          Add
        </button>
      </div>
      <h2> Todos - {todos.length}</h2>
      <div>
        <button
          onClick={() => {
            setFilter("Completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setFilter("InComplete");
          }}
        >
          InComplete
        </button>
        <button
          onClick={() => {
            setFilter("All");
          }}
        >
          All
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
