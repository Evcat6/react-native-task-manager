import { combineReducers } from "redux";
import { tasksReducer } from './tasksReducer';
import { modalReducer } from './modalReducer'
import { taskDetailsReducer } from './taskDetailsReducer';


export const rootReducer = combineReducers({
    tasks: tasksReducer,
    modal: modalReducer,
    taskDetails: taskDetailsReducer, 
})