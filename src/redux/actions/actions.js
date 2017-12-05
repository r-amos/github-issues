export const REQUEST_ISSUES = "REQUEST_ISSUES";

const requestIssues = repo => {
  return {
    type: REQUEST_ISSUES,

    repo
  };
};

export const RECIEVE_ISSUES = "RECIEVE_ISSUES";

const recieveIssues = (repo, json) => {
  return {
    type: RECIEVE_ISSUES,

    repo,

    json
  };
};

export const fetchIssues = repo => async dispatch => {
  dispatch(requestIssues(repo));

  try {
    const response = await fetch(
      "https://api.github.com/repos/octocat/Hello-World/issues"
    );

    const json = await response.json();

    dispatch(recieveIssues(repo, json));
  } catch (error) {
    console.error(`Error Fetching Issues: ${error}`);
  }
};
