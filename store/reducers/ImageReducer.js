const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_IMAGE':
            return action.index;
        default:
            return state
    }
};

export default imageReducer;
