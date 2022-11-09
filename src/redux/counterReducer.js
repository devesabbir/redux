const initialState = 0

const counterReducer = (state = initialState, {type, payload}) => {
     switch (type) {
        case 'INCREMENT':
             return state + 1
        case 'DECREMENT':
            return state > 0 ? state - 1 : state 

        default:
           return state
     } 
}


export default counterReducer;