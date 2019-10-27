import {
    CARD_ERROR,
    FETCH_CARDS,
    UPDATE_CARD,
    SELECT_CARD,
    SET_CURRENT
} from "../action/types";

const initialState = {
    cards: [],
    card: null,
    index: -1,
    current: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                cards: action.payload
            };
        case SELECT_CARD:
            // For select random number
            const randomNum = Math.round(
                action.payload * (state.cards.length - 1)
            );
            console.log(randomNum);
            return {
                ...state,
                card: state.cards[randomNum],
                index: randomNum
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case UPDATE_CARD:
            // Create new card by the title and description that updated
            const newCard = {
                ...state.card,
                ...action.payload
            };
            return {
                ...state,
                card: newCard,
                current: null,
                cards: state.cards.map((card, i) => {
                    return i === state.index ? newCard : card;
                })
            };
        case CARD_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
