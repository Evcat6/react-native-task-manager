import { combineReducers } from "redux";
import { modalReducer } from './modalReducer'
import { taskDetailsReducer } from './taskDetailsReducer';


export const rootReducer = combineReducers({
    modal: modalReducer,
    taskDetails: taskDetailsReducer, 
})