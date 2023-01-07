import { UPDATE_STATE, ADD_TASK } from '../reducers/tasksReducer';
import { UPDATE_MODAL_OPTIONS } from '../reducers/modalReducer';
import { ADD_TASK_DATA, CLEAR_TASK_DATA, UPDATE_TASK_DETAILS_OPEN } from '../reducers/taskDetailsReducer';

export const updateTasksAction = (payload) => ({type: UPDATE_STATE, payload});
export const addTaskAction = (payload) => ({type: ADD_TASK, payload});

export const updateModalAction = () => ({type: UPDATE_MODAL_OPTIONS}); 

export const addTaskDataAction = (payload) => ({type: ADD_TASK_DATA, payload});
export const clearTaskDataAction = () => ({type: CLEAR_TASK_DATA});
export const updateTaskDetailsOpenAction = () => ({type: UPDATE_TASK_DETAILS_OPEN});