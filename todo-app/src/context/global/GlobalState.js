import React, {useReducer} from 'react';
import globalContext from './globalContext'
import globalReducer from './globalReducer'

import {ADD_TASK, CLEAR_TASK} from '../types'

const GlobalState = props => {

    const dummyData =  [
        {
            description: 'Operating System Project',
            addedAt: '2020-12-12',
            deadline: '2021-04-05',
            notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            description: 'Database Management System Lab',
            addedAt: '2020-2-12',
            deadline: '2021-05-06',
            notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
            description: 'Software Design and Architecture Quiz',
            addedAt: '2020-12-1',
            deadline: '2021-09-04',
            notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        }
    ]

    // State
    const initialState = {
        items: localStorage.getItem('items') !== null ? JSON.parse(localStorage.getItem('items')) : dummyData
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const addTask = (addedAt, description, deadline, notes) => {
        dispatch({
            type: ADD_TASK,
            payload: {
                description,
                addedAt,
                deadline,
                notes
            }
        })
    }

    const clearTask = index => {
        dispatch({
            type: CLEAR_TASK,
            payload: index
        })
    }

    return <globalContext.Provider
            value={{
                items: state.items,
                addTask,
                clearTask
            }}
            >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;