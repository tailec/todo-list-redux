import { v4 } from "node-uuid";
import { FILTERS } from "../filterConstants";

const fakeDatabase = {
  todods: [
    {
      id: v4(),
      content: "hey",
      completed: true
    },
    {
      id: v4(),
      content: "ho",
      completed: true
    },
    {
      id: v4(),
      content: "hooo",
      completed: false
    }
  ]
};

const delay = ms => {
  new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case FILTERS.ALL:
        return fakeDatabase.todos;
      case FILTERS.COMPLETE:
        return fakeDatabase.todos.filter(t => t.completed);
      case FILTERS.INCOMPLETE:
        return fakeDatabase.todos.filter(t => !t.completed);
      default:
        throw new Error(`Unnknown filter: $(filter)`);
    }
  });
