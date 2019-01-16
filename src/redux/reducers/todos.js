import { v4 } from "node-uuid";
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";
import { FILTERS } from "../../filterConstants";

const initialState = {
  all: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action;
      return {
        ...state,
        all: [...state.all, { id, content, completed: false }]
      };
    }
    case TOGGLE_TODO: {
      const { id } = action;
      return {
        ...state,
        all: state.all.map(elem => {
          if (elem.id === id) {
            return { ...elem, completed: !elem.completed };
          } else {
            return elem;
          }
        })
      };
    }
    default:
      return state;
  }
}

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case FILTERS.ALL:
      return state.all;
    case FILTERS.COMPLETE:
      return state.all.filter(todo => todo.completed);
    case FILTERS.INCOMPLETE:
      return state.all.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
