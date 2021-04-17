import React, {useReducer} from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';

import {SET_ALERT, CLEAR_ALERT} from '../types'

const AlertState = props => {
    // State
    const initialState = {
        msg: '',
    };

    // Reducer
    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = msg => {
        // display message
        dispatch({
            type: SET_ALERT,
            payload: msg
        })
    }

    // Clear Alert
    const clearAlert = () => dispatch({type: CLEAR_ALERT});

    return <alertContext.Provider
            value={{
                msg: state.msg,
                setAlert,
                clearAlert
            }}
            >
        {props.children}
    </alertContext.Provider>
}

export default AlertState;