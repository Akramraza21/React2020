const data = { name: "", email: "" };
const reducer = (state = data, action) => {
  switch (action.type) {
    case "insert":
      
      return { ...state,  };

    case "delete":
      return { ...state, num: state.num - 1 };
    case "update":
      return { ...state, post: [...state.post, action.value] };
    default:
      return state;
  }
};
export default reducer;