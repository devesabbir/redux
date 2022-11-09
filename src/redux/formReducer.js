const initialState = 'addForm'

export const formReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_FORM': 
        return state = 'addForm'
        
        case 'EDIT_FORM': 
        return state = 'editForm'
        
        default: return state
    }
}