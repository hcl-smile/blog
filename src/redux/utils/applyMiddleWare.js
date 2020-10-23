const compose = require("./compose");

function applyMiddleWare(...middleWares) {
  return function (createStore) {
    return function (reducer) {
      const store = createStore(reducer);
      const middleApi = {
        getState: store.getState,
        dispatch: function (...args) {
          return store.dispatch(...args);
        },
      };

      const chains = middleWares.map((middleWare) => middleWare(middleApi));

      const dispatch = compose(...chains)(store.dispatch);

      return {
        dispatch,
        getState: store.getState,
      };
    };
  };
}

module.exports = applyMiddleWare;
