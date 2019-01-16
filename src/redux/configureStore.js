import { createStore } from "redux";
import throttle from "lodash/throttle";
import reducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }, 1000)
  );

  return store;
};

export default configureStore;
