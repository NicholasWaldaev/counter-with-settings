import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
    counter: countReducer
})

export type StateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)