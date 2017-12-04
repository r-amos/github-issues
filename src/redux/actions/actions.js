export const REQUEST_ISSUES = 'REQUEST_ISSUES'
const requestIssues = (repo) => {
    return {
        type: REQUEST_ISSUES,
        repo
    }
}

export const RECIEVE_ISSUES = 'RECIEVE_ISSUES'
const recieveIssues = (repo,json) => {
    return {
        type: RECIEVE_ISSUES,
        repo,
        json

    }
}

export const fetchIssues = (repo) => {
    return (dispatch) => {
        dispatch(requestIssues(repo))
        return fetch('https://api.github.com/repos/octocat/Hello-World/issues')
            .then(response => response.json())
            .then(json => dispatch(recieveIssues(repo,json)))
    }
}