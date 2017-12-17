const pagesReducer = (state = null, action) => {
  switch (action.type) {
    case "NUMBER_OF_PAGES":
      return action.pages;
    default:
      return state;
  }
};

export default pagesReducer;
