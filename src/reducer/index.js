import { combineReducers } from "redux";
import CardReducer from "./CardReducer";

export default combineReducers({
    cardRes: CardReducer
});
