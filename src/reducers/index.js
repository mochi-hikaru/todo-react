const initisalState = [];

const reducer = (state = initisalState, action) => {
    switch (action.type) {
        case "SHOW":
            return action.todo;
        case "Add":
            return action.todo;
        default: 
            return state;
    }
}

export default reducer;