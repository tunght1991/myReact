import * as types from '../constants/ActionTypes';

export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        text
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        id
    }
}

export const editTodo = (id,text) => {
    return {
        type: types.EDIT_TODO,
        text,
        id
    }
}

export const markTodo = (id) => {
    return{
        type: types.MARK_TODO,
        id
    }
}

export const markAll = () => {
    return {
        type: types.MARK_ALL
    }
}

export const clearMarked = () => {
    return {
        type: types.CLEAR_MARKED
    }
}