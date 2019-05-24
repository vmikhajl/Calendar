import {combineReducers, createStore} from "redux";
import calendarReducer from "./reducer/calendar-reducer";

let reducers = combineReducers({
    calendarData : calendarReducer
});
let store = createStore(reducers);

window.store = store;
export default store;
