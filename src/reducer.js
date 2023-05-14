export const initialState = {
    user: localStorage.getItem("user"),
    searchKeyword:localStorage.getItem("searchKeyword")
  };
  
  const reducer = (state, action) => {
    console.log("action >>>>", action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      
      case "SET_SEARCH_KEYWORD":
          return {
            ...state,
            searchKeyword: action.payload,
          };
      
      default:
        return state;
    }
  };
  
  export default reducer;
  