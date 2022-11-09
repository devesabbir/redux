const initialState = {}

const singleReducer = ( state = initialState, {type, payload}) => {
     switch (type) {
        case 'SINGLE':
         return state = payload
        default:
         return state
     }
}

export default singleReducer;