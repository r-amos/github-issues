const issuesReducer = (state = null, action) => {
  switch (action.type) {
    case "RECIEVE_ISSUES":
      return {
        ...state,
        ...action.json
      };
    case "CLEAR_ISSUES":
      return null;

    default:
      return state;
  }
};

export default issuesReducer;
