var state = function state(initialValue, actionCreator) {
  var value = initialValue;
  var listeners = new Set();
  function get() {
    return value;
  }
  function set(newValue) {
    var nextValue = typeof newValue === 'function' ? newValue(value) : newValue;
    if (!Object.is(value, nextValue)) {
      value = nextValue;
      listeners.forEach(function (listener) {
        listener();
      });
    }
  }
  return {
    get: get,
    set: set,
    subscribe: function subscribe(listener) {
      listeners.add(listener);
      return function () {
        listeners["delete"](listener);
      };
    },
    actions: actionCreator && actionCreator(set, get)
  };
};

export { state };