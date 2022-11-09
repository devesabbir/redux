import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import counterReducer from './counterReducer';
import { devsReducer } from "./devsReducer";
import { formReducer } from "./formReducer";
import singleReducer from "./singleReducer";


const rootReducer = combineReducers({
     counter: counterReducer,
     color : colorReducer,
     devs: devsReducer,
     form: formReducer,
     singleData: singleReducer
})

export default rootReducer

