const issueReducer = (state = null, action) => {
  switch (action.type) {
    case "RECIEVE_ISSUE":
      return { ...state, ...action.json };
    case "REMOVE_ISSUE":
      return null;
    default:
      return state;
  }
};

export default issueReducer;
