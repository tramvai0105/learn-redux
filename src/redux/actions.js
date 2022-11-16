import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, 
    COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON,
    ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from "./types"

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function createComment(text, id) {
    return {
        type: COMMENT_CREATE,
        data: {text: text, id: id}
    }
}

export function updateComment(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: {text: text, id: id}
    }
}

export function deleteComment(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function loadComments() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
            const jsonData = await response.json()
            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData
                })
                dispatch(loaderOff())
            }, 1000);    
        } catch(err){
            dispatch(errorOn("ОШИБКА API"))
            dispatch(loaderOff)
        }
    }
}

export function errorOn(text) {
    return {
        type: ERROR_DISPLAY_ON,
        text
    }
}

export function errorOff(text) {
    return {
        type: ERROR_DISPLAY_OFF,
        text
    }
}