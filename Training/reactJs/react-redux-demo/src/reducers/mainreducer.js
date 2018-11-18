
const initialState = {
    value: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return state = {
                ...state,
                value: state.value + action.payload.val
            }
            break;
        case "SUB":
        if(state.value===0){
            return state;
        }
           return state = {
                ...state,
                value: state.value - action.payload.val
            }
            break;
    }
    return state;
}

export default mainReducer;