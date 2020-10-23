function createStore(reducer, preloadState, enhancer) {
  if (typeof preloadState === "function" && !enhancer) {
    enhancer = preloadState;
    preloadState = undefined;
  }

  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let state = preloadState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    if (!isPlainObject(action)) {
      return new Error(`Action is must be plain object`);
    }

    if (!action.type) {
      return new Error(`${action} is must be type`);
    }

    state = reducer(state, action);

    console.log(state, "state fff");

    listeners.length && listeners.forEach((callback) => callback());

    return action;
  }

  function subscribe(callback) {
    listeners.push(callback);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

module.exports = createStore;
