import {
    CARD_ERROR,
    FETCH_CARDS,
    UPDATE_CARD,
    SELECT_CARD,
    SET_CURRENT
} from "./types";

// Fetch the cards from the pushe api
export const fetchCards = () => async dispatch => {
    try {
        const res = await fetch("http://static.pushe.co/challenge/json");
        const data = await res.json();

        dispatch({
            type: FETCH_CARDS,
            payload: data.cards
        });
    } catch (err) {
        dispatch({
            type: CARD_ERROR,
            payload: err.response.data
        });
    }
};

// Select the card by random
export const selectCard = () => {
    let randomNum = Math.random();
    return {
        type: SELECT_CARD,
        payload: randomNum
    };
};

export const setCurrent = card => ({
    type: SET_CURRENT,
    payload: card
});

export const updateCard = (title, description) => ({
    type: UPDATE_CARD,
    payload: { title, description }
});
