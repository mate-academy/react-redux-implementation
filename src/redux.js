export function createStore(
  reducer,
  initialState = reducer(undefined, { type: '@@INIT' })
) {
  let state = initialState;
  let callbacks = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);

      callbacks.forEach(cb => cb());
    },
    subscribe(f) {
      if (!callbacks.includes(f)) {
        callbacks.push(f)
      }

      return () => {
        callbacks = callbacks.filter(cb => cb !== f);
      };
    }
  }
}


