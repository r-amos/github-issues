const repoReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_REPO_URL":
      return action.url;
    default:
      return state;
  }
};

export default repoReducer;
