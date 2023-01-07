const defaultState = {
    taskData: {},
    taskDetailsOpen: false,
}


export const ADD_TASK_DATA = 'UPDATE_TASK_DATA';
export const CLEAR_TASK_DATA = 'DELETE_TASK_DATA';
export const UPDATE_TASK_DETAILS_OPEN = 'UPDATE_TASK_DETAILS_OPEN';

export const taskDetailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK_DATA:
            return {...state, taskData: action.payload};
        case CLEAR_TASK_DATA: 
            return {...state, taskData: {}};
        case UPDATE_TASK_DETAILS_OPEN:
            return {...state, taskDetailsOpen: !state.taskDetailsOpen};
        default: 
            return state
    }
}
