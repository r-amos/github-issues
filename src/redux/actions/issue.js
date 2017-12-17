export const REQUEST_ISSUE = "REQUEST_ISSUE";

const requestIssue = number => {
  return {
    type: REQUEST_ISSUE,

    number
  };
};

export const RECIEVE_ISSUE = "RECIEVE_ISSUE";

const recieveIssue = (number, json) => {
  return {
    type: RECIEVE_ISSUE,

    number,

    json
  };
};

export const REMOVE_ISSUE = "REMOVE_ISSUE";

export const removeIssue = number => {
  return {
    type: REMOVE_ISSUE,

    number
  };
};

export const fetchIssue = number => async (dispatch, getState) => {
  dispatch(requestIssue(number));

  try {

    const { repoURL } = getState();

    const issuesPageURL = `${repoURL}/${number}`;

    const response = await fetch(issuesPageURL);

    const json = await response.json();

    dispatch(recieveIssue(number, json));
  } catch (error) {
    console.error(`Error Fetching Issue: ${error}`);
  }
};
