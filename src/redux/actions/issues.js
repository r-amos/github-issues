import { setRepoURL } from "./repo";

export const GET_INITIAL_DATA = "GET_INITIAL_DATA";

const getInitialData = url => {
  return {
    type: GET_INITIAL_DATA,
    url
  };
};

export const NUMBER_OF_PAGES = "NUMBER_OF_PAGES";

const noOfPages = number => {
  return {
    type: NUMBER_OF_PAGES,
    pages: number
  };
};

export const CLEAR_ISSUES = "CLEAR_ISSUES";

const clearIssues = () => {
  return {
    type: CLEAR_ISSUES
  };
};

export const REQUEST_ISSUES = "REQUEST_ISSUES";

const requestIssues = url => {
  return {
    type: REQUEST_ISSUES,
    url
  };
};

export const RECIEVE_ISSUES = "RECIEVE_ISSUES";

const recieveIssues = (url, json) => {
  return {
    type: RECIEVE_ISSUES,
    url,
    json
  };
};

export const initializeData = url => async dispatch => {
  dispatch(getInitialData(url));

  try {
    
    const response = await fetch(url);
    const json = await response.json();
    const headers = await response.headers.get("Link").split(",");

    const link = headers.reduce((acc, value) => {
      const header = value.split(";");
      const key = header[1].replace(/(rel="|"|\W)/g, "").trim();
      acc[key] = header[0].replace(/[<>"]/g, "").trim();
      return acc;
    }, {});

    const pageUrl = link.next.replace(/\?(page=)\w+/g, "");

    dispatch(setRepoURL(pageUrl));

    const numberOfPages = parseInt(
      link.last
        .match(/(page=)\w+/g)[0]
        .replace(/page=/g, " ")
        .trim()
    );

    dispatch(noOfPages(numberOfPages));

    dispatch(requestIssues(url));

    dispatch(recieveIssues(url, json));

  } catch (error) {
    console.error(`Error Fetching Issues: ${error}`);
  }
};

export const fetchIssues = pageNumber => async (dispatch, getState) => {
  dispatch(clearIssues());

  const { repoURL } = getState();

  const issuesPageURL = `${repoURL}?page=${pageNumber}`;

  dispatch(requestIssues(issuesPageURL));

  try {
    const response = await fetch(issuesPageURL);

    const json = await response.json();

    dispatch(recieveIssues(issuesPageURL, json));
  } catch (error) {
    console.error(`Error Fetching Issues: ${error}`);
  }
};

/*
  export const REQUEST_PAGE_ISSUE = "REQUEST_PAGE_ISSUE";
  
  const requestPageIssues = url => {
    return {
      type: REQUEST_PAGE_ISSUE,
  
      url
    };
  };
  
  

export const RECIEVE_PAGE_ISSUES = "RECIEVE_PAGE_ISSUES";

const recievePageIssues = (url, json) => {
  return {
    type: RECIEVE_PAGE_ISSUES,

    url,

    json
  };
};

export const fetchPageIssues = url => async dispatch => {
  
    dispatch(requestPageIssues(url));
  
    try {
  
      const response = await fetch(url);
  
      const json = await response.json();
  
      dispatch(recievePageIssues(url, json));
  
    } catch (error) {
  
      console.error(`Error Fetching Issues: ${error}`);
  
    }
  };

*/
