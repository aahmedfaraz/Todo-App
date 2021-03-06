import {SET_ALERT, CLEAR_ALERT} from '../types'

const alertReducer = (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return {
                ...state,
                msg: action.payload
            }
        case CLEAR_ALERT:
            return {
                ...state,
                msg: ''
            }
        default:
            return {
                ...state,
            }
    }
}

export default alertReducer;