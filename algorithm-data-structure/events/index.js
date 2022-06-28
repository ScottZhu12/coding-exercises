// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  // register an event handler
  on = (eventName, callback) => {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  };

  // trigger all callbacks associated with a given eventName
  trigger = (eventName) => {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  };

  // remove all event handlers associated with the given eventName
  off = (eventName) => {
    delete this.events[eventName];
  };
}

module.exports = Events;
