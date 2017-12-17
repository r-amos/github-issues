export const NUMBER_OF_PAGES = "NUMBER_OF_PAGES";

export const noOfPages = number => {
  return {
    type: NUMBER_OF_PAGES,
    pages: number
  };
};
