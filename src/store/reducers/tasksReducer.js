const defaultState = {
    tasks: [
        {id: 6856746535, title: 'Upload 1099-R to TurboTax', type: '💰 Finance', completed: false},
        {id: 574574354, title: 'Submit 2019 tax return', type: '💰 Finance', completed: false},
        {id: 574575, title: 'Print parking passes', type: '💞 Wedding', completed: false},
        {id: 89089656763, title: 'Sign contract, send back', type: '🖥️ Freelance', completed: true},
        {id: 5467, title: 'Hand sanitizer', type: '🛒 Shopping List', completed: true},
        {id: 767457, title: 'Upload 1099-R to TurboTax', type: '💰 Finance', completed: true},
        {id: 5536354, title: 'Submit 2019 tax return', type: '💰 Finance', completed: true},
        {id: 5536394, title: 'Submit 2019 tax return', type: '💰 Finance', completed: false},
        {id: 56736354, title: 'Submit 2019 tax return', type: '💰 Finance', completed: false},

    ]
}

export const UPDATE_STATE = 'UPDATE_STATE';
export const ADD_TASK = 'ADD_TASK';

export const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return {...state, tasks: action.payload};
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        default: 
            return state;
    }
};

