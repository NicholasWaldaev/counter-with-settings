import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";

const rootReducer = combineReducers({
    counter: countReducer
})

export type StateType = ReturnType<typeof rootReducer>

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if(persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe( () => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})