import { selector } from "recoil";
import { filterState, todoState } from "../atom/atom";

export const filteredTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const filter = get(filterState);
    const todos = get(todoState);
    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.status === "Completed");
      case "InComplete":
        return todos.filter((todo) => todo.status !== "Completed");
      default:
        return todos;
    }
  }
});
