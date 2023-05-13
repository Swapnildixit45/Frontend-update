export const initialState = {
    user: localStorage.getItem("user"),

  };
  
  const reducer = (state, action) => {
    console.log("action >>>>", action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      default:
        return;
    }
  };
  
  export default reducer;
  