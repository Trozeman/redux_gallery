const appReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_DATA':
            return {
                ...state,
                data: action.data
            };
        default:
            return state
    }
};


export default appReducer;
