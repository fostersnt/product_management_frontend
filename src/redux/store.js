const redux = require("redux");
require("./users/action");
require("./users/reducer");

const createStore = redux.createStore;

const store = createStore(userReducer);
console.log("INITIAL STATE: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("UPDATED STATE: ", store.getState());

  store.dispatch(userAction());

  unsubscribe();
});
