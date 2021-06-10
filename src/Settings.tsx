import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "./Store/store";
import {changeMaxNumber, changeMinNumber, createStartNumber, InitialStateType} from "./Store/count-reducer";
import { SettingInput } from './SettingsInput';
import {Button} from "./Button";

export function Settings() {
    const dispatch = useDispatch()
    const counter = useSelector<StateType, InitialStateType>(state => state.counter)

    const changeMaxInput = (number: number) => {
        dispatch(changeMaxNumber(number))
    }

    const changeMinInput = (number: number) => {
        dispatch(changeMinNumber(number))
    }

    const clickSettings = () => {
        dispatch(createStartNumber())
    }

    const settingsDisabled = counter.minNumber < 0
        || counter.minNumber >= counter.maxNumber
        || counter.startNumber >= counter.minNumber

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

    return (
        <div>
            <div className="AppInput">
                <SettingInput changeInput={changeMaxInput}
                              title={'max value:'}
                              style={styleMaxInput}
                              number={counter.maxNumber}/>
                <SettingInput changeInput={changeMinInput}
                              title={'start value:'}
                              style={styleMinInput}
                              number={counter.minNumber}/>
            </div>
            <div className="AppButton">
                <Button funcButton={clickSettings}
                        title={'set'}
                        disableButton={settingsDisabled}
                />
            </div>
        </div>
    )
}

