import { addData } from "./types";

const initialState = {
      data :  JSON.parse(localStorage.getItem('devs')) || [],
      loading: false,
}

export const devsReducer = ( state = initialState, {type, payload}) => {

    switch (type) {
     case addData:
        return {
            ...state,
            data:payload
        }
   
      default:
       return state
   }
}