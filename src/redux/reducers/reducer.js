const reducer = (state=null,action) => {

    switch(action.type) {
        case 'RECIEVE_ISSUES':
            return {...state,...action.json}

        default:
            return state

    }
}

export default reducer;