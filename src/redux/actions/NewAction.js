import {ADD_NEW, UPDATE_NEW, REMOVE_NEW} from '../types/actionType';

export const addNewAction = (action) => {
    return {
        type: ADD_NEW,
        payload: {
            _id: action._id,
            title: action.title,
            content: action.content,
            image: action.image
        }
    }
}

export const removeNewAction = (action) => {
    return {
        type: REMOVE_NEW,
        payload: {
            _id: action._id,
            title: action.title,
            content: action.content,
            image: action.image
        }
    }
}

export const updateNewAction = (action) => {
    return {
        type: UPDATE_NEW,
        payload: {
            _id: action._id,
            title: action.title,
            content: action.content,
            image: action.image
        }
        // item.hotelName = hotelName ? hotelName : item.hotelName;
    }
}