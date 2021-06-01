import React from "react";

type CountPropsType = {
    number: number
    maxNumber: number
    minNumber: number
    value: string
    incButton: () => void
    resetButton: () => void
    disable: boolean
}

export function Count(props: CountPropsType) {
    const incButtonHandler = () => {
        props.incButton()
    }

    const resetButtonHandler = () => {
        props.resetButton()
    }

    const messageError = props.minNumber < 0
    || props.minNumber >= props.maxNumber ? 'Error!' : props.value;
    const messageCount = props.disable ? props.number : messageError;

    const colorError = messageError === 'Error!' ? 'ColorError' : 'ColorStart';
    const colorNumber = !props.disable  ? colorError : '';
    const colorNumberError = props.number === props.maxNumber ? 'ColorError' : ''

    const incDisabled = props.number === props.maxNumber
        || props.minNumber < 0
        || props.minNumber >= props.maxNumber || messageCount === messageError;
    const resetDisabled = props.minNumber < 0
        || props.number < props.maxNumber || !props.disable;

    return (
        <div>
            <div className="AppInput">
                <div className="AppInputCount">
                    <div className={colorNumber || colorNumberError}>{messageCount}</div>
                </div>
            </div>
            <div className="AppButton">
                <div className="ButtonSettings">
                    <button className="ButtonInc"
                            disabled={incDisabled}
                            onClick={incButtonHandler}>inc
                    </button>
                    <button className="ButtonReset"
                            disabled={resetDisabled}
                            onClick={resetButtonHandler}>reset
                    </button>
                </div>
            </div>
        </div>
    )
}