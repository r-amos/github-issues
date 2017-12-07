const issueReducer = (state = null, action) => {
    switch (action.type) {
      case "RECIEVE_ISSUE":
        return { ...state, ...action.json };
  
      default:
        return state;
    }
  };
  
  export default issueReducer;