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

export const fetchIssues = url => async dispatch => {

  dispatch(requestIssues(url));

  try {

    const response = await fetch(url);

    const json = await response.json();

    const headers = await response.headers.get('Link').split(",");

    const link = headers.reduce((acc,value) => {

      const header =  value.split(";");

      const key = header[1].replace(/(rel="|"|\W)/g,'').trim();
      
      acc[key] = header[0].replace(/[<>"]/g,'').trim();

      return acc;

    },{})

    const newurl = link.next.replace(/\?(page=)\w+/g,'');
   
    const numberOfPages = link.last.match(/(page=)\w+/g)[0].replace(/page=/g,' ');

    dispatch(recieveIssues(url, json));

  } catch (error) {

    console.error(`Error Fetching Issues: ${error}`);

  }
};
