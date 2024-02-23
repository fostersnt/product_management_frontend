import action from "./action";

let initialState = {
  name: "",
  age: 0,
  class: "Basic 2",
};

const userReducer = (initialState, action) => {
  switch (action.type) {
    case USER_DELETED:
      return {
        ...initialState,
        name: "Foster",
      };
      break;

    default:
      return initialState;
      break;
  }
};

export default userReducer;
