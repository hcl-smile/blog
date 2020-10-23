const createStore = require("./store");
const applyMiddleWare = require("./utils/applyMiddleWare");

const reduxThunk = ({ getState, dispatch }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch);
  }
  return next(action);
};

const reduxThunk1 = ({ getState, dispatch }) => (next) => (action) => {
  return next(action);
};

const middles = [reduxThunk, reduxThunk1];

const initial = { count: 0 };

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "SUM":
      return {
        ...state,
        count: state.count++,
      };
  }
};

const store = createStore(reducer, applyMiddleWare(...middles));

store.dispatch((dispatch) => {
  dispatch({
    type: "SUM",
  });
});

store.dispatch((dispatch) => {
  dispatch({
    type: "SUM",
  });
});

console.log(store.getState(), "get state");
