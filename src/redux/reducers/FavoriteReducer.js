import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types/actionType";

const initialState = {
    news: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE: {
            let news = [...state.news];
            news.unshift(action.payload);
            return { ...state, news: news }
        }
        case REMOVE_FAVORITE: {
            let news = [...state.news];
            news = news.filter((item) => {
                return item._id !== action.payload._id;
            });
            return {...state, news: news};
        }
        default:
            return state;
    }
}