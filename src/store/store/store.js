const SubPub = require("../lib/pubsub");

class Store {
  constructor(params) {
    const self = this;

    self.actions = {}; // 异步任务对象
    self.mutations = {}; // 同步任务对象
    self.state = {}; // 全局状态对象
    self.plugins = []; // 插件
    self.status = "resting"; // 初始状态

    self.events = new SubPub();

    if (params.hasOwnProperty("actions")) {
      self.actions = params.actions;
    }

    if (params.hasOwnProperty("mutations")) {
      self.mutations = params.mutations;
    }

    // 插件
    if (params.hasOwnProperty("plugins")) {
      self.plugins = params.plugins;
    }

    // 代理
    self.state = new Proxy(params.state || {}, {
      set(state, key, value) {
        state[key] = value;

        self.events.publish("stateChange", self.state);

        if (self.status !== "mutation") {
          console.warn("warning");
        }

        self.status = "resting";

        return true;
      },
    });
  }

  dispatch = (actionKey, payload) => {
    const self = this;
    if (typeof self.actions[actionKey] !== "function") {
      console.warn(`Action ${actionKey} dose not exist`);
      return false;
    }

    self.status = "action";
    self.actions[actionKey]({ commit: self.commit }, payload);

    return true;
  };

  commit = (mutationKey, payload) => {
    const self = this;
    if (typeof self.mutations[mutationKey] !== "function") {
      console.warn(`Mutation ${mutationKey} dose not exist`);
      return false;
    }

    self.status = "mutation";
    self.mutations[mutationKey](self.state, payload);

    self.plugins.length && self.plugins.forEach((plugin) => plugin());

    return true;
  };
}

module.exports = Store;
