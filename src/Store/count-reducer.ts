const CHANGE_MIN_NUMBER = "CHANGE-MIN-NUMBER"
const CHANGE_MAX_NUMBER = "CHANGE-MAX-NUMBER"
const CREATE_START_NUMBER = "CREATE-START-NUMBER"
const INCREMENT_START_NUMBER = "INCREMENT-START-NUMBER"
const END_START_NUMBER = "END-START-NUMBER"

type ChangeMinNumberAT = {
    type: typeof CHANGE_MIN_NUMBER
    newMinNumber: number
}

type ChangeMaxNumberAT = {
    type: typeof CHANGE_MAX_NUMBER
    newMaxNumber: number
}

type CreateStartNumberAT = {
    type: typeof CREATE_START_NUMBER

}

type IncrementStartNumberAT = {
    type: typeof INCREMENT_START_NUMBER
}

type EndStartNumberAT = {
    type: typeof END_START_NUMBER
}

type ActionType = ChangeMinNumberAT
    | ChangeMaxNumberAT
    | CreateStartNumberAT
    | IncrementStartNumberAT
    | EndStartNumberAT

export type InitialStateType = {
    minNumber: number
    maxNumber: number
    startNumber: number | string
    value: ValueType
}

type ValueType = 'Counter setting!' | 'Incorrect value!'

export const initialState: InitialStateType = {
    minNumber: 0,
    maxNumber: 5,
    startNumber: 0,
    value: 'Counter setting!',
}

export function countReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case CHANGE_MIN_NUMBER: {
            let copyState = {...state}
            copyState.minNumber = action.newMinNumber
            if (copyState.minNumber < 0 || copyState.minNumber >= copyState.maxNumber) {
                copyState.value = 'Incorrect value!'
                copyState.startNumber = copyState.value
            } else {
                copyState.value = 'Counter setting!'
                copyState.startNumber = copyState.value
            }
            return copyState
        }
        case CHANGE_MAX_NUMBER: {
            let copyState = {...state}
            copyState.maxNumber = action.newMaxNumber
            if (copyState.maxNumber <= copyState.minNumber || copyState.maxNumber <= 0) {
                copyState.value = 'Incorrect value!'
                copyState.startNumber = copyState.value
            } else {
                copyState.value = 'Counter setting!'
                copyState.startNumber = copyState.value
            }
            return copyState
        }
        case CREATE_START_NUMBER: {
            if (state.minNumber < state.maxNumber && state.minNumber >= 0) {
                return {...state, startNumber: state.startNumber = state.minNumber}
            }
            return state
        }
        case INCREMENT_START_NUMBER: {
            if (state.startNumber !== state.maxNumber) {
                return {...state, startNumber: Number(state.startNumber) + 1}
            }
            return state
        }
        case END_START_NUMBER: {
            if (state.startNumber <= state.maxNumber) {
                return {...state, startNumber: state.startNumber = state.minNumber}
            }
            return state
        }
        default:
            return state
    }
}

export const changeMinNumber = (newMinNumber: number): ChangeMinNumberAT => ({type: CHANGE_MIN_NUMBER, newMinNumber})
export const changeMaxNumber = (newMaxNumber: number): ChangeMaxNumberAT => ({type: CHANGE_MAX_NUMBER, newMaxNumber})
export const createStartNumber = (): CreateStartNumberAT => ({type: CREATE_START_NUMBER})
export const incrementStartNumber = (): IncrementStartNumberAT => ({type: INCREMENT_START_NUMBER})
export const endStartNumber = (): EndStartNumberAT => ({type: END_START_NUMBER})
