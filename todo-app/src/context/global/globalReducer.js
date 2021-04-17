import {ADD_TASK, CLEAR_TASK} from '../types'

const globalReducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            const newListWithAddition = [...state.items, {
                addedAt: action.payload.addedAt,
                description: action.payload.description,
                deadline: action.payload.deadline,
                notes: action.payload.notes
            }];
            localStorage.setItem('items', JSON.stringify(
                [...newListWithAddition]
            ))
            return {
                ...state,
                items: [...newListWithAddition]
            }
        case CLEAR_TASK:
            const newListWithClear = [...state.items.filter((ele, ind) => ind !== action.payload && ele)];
            localStorage.setItem('items', JSON.stringify(
                [...newListWithClear]
            ));
            return {
                ...state,
                items: [...newListWithClear]
            }
        default:
            return {
                ...state,
            }
    }
}

export default globalReducer;