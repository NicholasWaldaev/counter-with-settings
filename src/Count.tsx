import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./Store/store";
import {endStartNumber, incrementStartNumber, InitialStateType} from "./Store/count-reducer";

export function Count() {
    const dispatch = useDispatch()
    const counter = useSelector<StateType, InitialStateType>(state => state.counter)

    const incButtonHandler = () => {
        dispatch(incrementStartNumber())
    }

    const resetButtonHandler = () => {
        dispatch(endStartNumber())
    }

    const colorError = counter.startNumber === 'Incorrect value!'
    || counter.startNumber === counter.maxNumber ? 'ColorError' : ''
    const colorSettings = counter.startNumber === 'Counter setting!' ? 'ColorStart' : ''

    const incDisabled = counter.startNumber === counter.maxNumber
        || counter.minNumber < 0
        || counter.minNumber >= counter.maxNumber
        || counter.startNumber === counter.value
    const resetDisabled = counter.minNumber < 0
        || counter.startNumber < counter.maxNumber
        || counter.minNumber >= counter.maxNumber
        || counter.startNumber === counter.value

    return (
        <div>
            <div className='AppInput'>
                <div className='AppInputCount'>
                    <div className={colorError || colorSettings}>{counter.startNumber}</div>
                </div>
            </div>
            <div className='AppButton'>
                <div className='ButtonCount'>
                    <button className='ButtonItem'
                            disabled={incDisabled}
                            onClick={incButtonHandler}>inc
                    </button>
                    <button className='ButtonItem'
                            disabled={resetDisabled}
                            onClick={resetButtonHandler}>reset
                    </button>
                </div>
            </div>
        </div>
    )
}


