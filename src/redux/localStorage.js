const LOCALSTORAGE_STATE_KEY = "state";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCALSTORAGE_STATE_KEY, serializedState);
  } catch (err) {
    // Ignore
  }
};
