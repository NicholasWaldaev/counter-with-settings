import React, {ChangeEvent} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./Store/store";
import {changeMaxNumber, changeMinNumber, createStartNumber, InitialStateType} from "./Store/count-reducer";

export function Settings() {
    const dispatch = useDispatch()
    const counter = useSelector<StateType, InitialStateType>(state => state.counter)

    const changeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxNumber(Number(e.currentTarget.value)))
    }

    const changeMinInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMinNumber(Number(e.currentTarget.value)))
    }

    const clickSettings = () => {
        dispatch(createStartNumber())
    }

    const styleMinInput = {
        outline: "none",
        border: counter.minNumber < 0 || counter.minNumber >= counter.maxNumber ? "3px solid red" : '',
        backgroundColor: counter.minNumber < 0 || counter.minNumber >= counter.maxNumber ? "orange" : '',
    }

    const styleMaxInput = {
        outline: "none",
        border: counter.minNumber >= counter.maxNumber ? "3px solid red" : '',
        backgroundColor: counter.minNumber >= counter.maxNumber ? "orange" : '',
    }

    const errorButton = counter.minNumber < 0
        || counter.minNumber >= counter.maxNumber
        || counter.startNumber >= counter.minNumber

    return (
        <div>
            <div className="AppInput">
                <div className="AppInputMain">
                    <div>
                        max value:
                    </div>
                    <input style={styleMaxInput}
                           onChange={changeMaxInput}
                           value={counter.maxNumber}
                           type="number"/>
                </div>
                <div className="AppInputMain">
                    <div>
                        start value:
                    </div>
                    <input style={styleMinInput}
                           onChange={changeMinInput}
                           value={counter.minNumber}
                           type="number"/>
                </div>
            </div>
            <div className="AppButton">
                <button className='ButtonItem'
                        disabled={errorButton}
                        onClick={clickSettings}>set
                </button>
            </div>
        </div>
    )
}