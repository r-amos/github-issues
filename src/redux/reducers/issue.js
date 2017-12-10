const issueReducer = (state = null, action) => {
  console.log(action);
  console.log(state);
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
