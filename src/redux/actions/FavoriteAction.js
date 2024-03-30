import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types/actionType";

export const addFavorite = (action) => {
    return {
        type: ADD_FAVORITE,
        payload: {
            _id: action._id,
            title: action.title,
            content: action.content,
            image: action.image
        }
    }
}

export const removeFavorite = (action) => {
    return {
        type: REMOVE_FAVORITE,
        payload: {
            _id: action._id,
            title: action.title,
            content: action.content,
            image: action.image
        }
    }
}