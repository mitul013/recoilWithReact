import { atom } from "recoil";

export const todoState = atom({
  key: "todos",
  default: [{ title: "It's demo", status: "Completed", id: 1 }]
});

export const filterState = atom({
  key: "filter",
  default: "All"
});
