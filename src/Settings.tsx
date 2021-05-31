import React, {ChangeEvent} from 'react';
import './App.css';

type SettingsPropsType = {
    changeSettings: () => void
    changeMaxNumber: (number: number) => void
    changeMinNumber: (number: number) => void
    disableButton: () => void
    maxNumber: number
    minNumber: number
    disable: boolean
}

export function Settings(props: SettingsPropsType) {

    const changeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeMaxNumber(Number(e.currentTarget.value))
    }

    const changeMinInput = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeMinNumber(Number(e.currentTarget.value))
    }

    const clickSettings = () => {
        props.changeSettings();
        props.disableButton();
    }

    const styleMinInput = {
        outline: "none",
        border: props.minNumber < 0 || props.minNumber >= props.maxNumber ? "3px solid red" : '',
        backgroundColor: props.minNumber < 0 || props.minNumber >= props.maxNumber ? "orange" : '',
    }

    const styleMaxInput = {
        outline: "none",
        border: props.minNumber >= props.maxNumber ? "3px solid red" : '',
        backgroundColor: props.minNumber >= props.maxNumber ? "orange" : '',
    }

    const errorButton = props.minNumber < 0 || props.minNumber >= props.maxNumber

    return (
        <div>
            <div className="AppInput">
                <div className="AppInputMain">
                    <div>
                        max value:
                    </div>
                    <input style={styleMaxInput}
                           onChange={changeMaxInput}
                           value={props.maxNumber}
                           type="number"/>
                </div>
                <div className="AppInputMain">
                    <div>
                        start value:
                    </div>
                    <input style={styleMinInput}
                           onChange={changeMinInput}
                           value={props.minNumber}
                           type="number"/>
                </div>
            </div>
            <div className="AppButton">
                <button className='ButtonCount'
                        disabled={props.disable || errorButton}
                        onClick={clickSettings}>set
                </button>
            </div>
        </div>
    )
}