class PubSub {
  constructor() {
    this.events = {};
  }

  // 订阅
  subscribe(event, callback) {
    const self = this;
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    return self.events[event].push(callback);
  }

  // 发布
  publish(event, data = {}) {
    const self = this;

    if (!self.events.hasOwnProperty(event)) {
      return [];
    }

    return self.events[event].map((callback) => callback(data));
  }
}

module.exports = PubSub;
