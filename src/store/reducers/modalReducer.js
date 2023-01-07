const defaultState = { 
    modalOpen: false
}

export const UPDATE_MODAL_OPTIONS = "UPDATE_MODAL_OPTIONS";

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_MODAL_OPTIONS: 
            return {...state, modalOpen: !state.modalOpen};
        default: 
            return state;
    }
};