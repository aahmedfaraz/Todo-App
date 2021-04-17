import {ADD_TASK, CLEAR_TASK} from '../types'

const globalReducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                items: [...state.items, {
                    addedAt: action.payload.addedAt,
                    description: action.payload.description,
                    deadline: action.payload.deadline,
                    notes: action.payload.notes
                }]
            }
        case CLEAR_TASK:
            return {
                ...state,
                items: state.items.filter((ele, ind) => ind !== action.payload && ele)
            }
        default:
            return {
                ...state,
            }
    }
}

export default globalReducer;