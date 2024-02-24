const initialState = {
  name: "",
  age: 0,
  class: "Basic 2",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DELETED:
      return {
        ...state,
        name: "Foster",
      };
      break;

    default:
      return initialState;
      break;
  }
};

export default userReducer;
