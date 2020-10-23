const Store = require("./src/状态管理器/store/store");

const store = new Store({
  state: {
    count: 0,
  },
  mutations: {
    run(state, payload) {
      state.count = payload.count;
    },
  },
  actions: {
    run({ commit }, payload) {
      commit("run", payload);
    },
  },
  plugins: [function callback() {}],
});

store.dispatch("run", { count: 999 });
console.log(store.state);
