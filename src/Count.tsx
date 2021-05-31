import React from "react";

type CountPropsType = {
    number: number
    maxNumber: number
    minNumber: number
    value: string
    incButton: () => void
    resetButton: () => void
}

export function Count(props: CountPropsType) {
    const incButtonHandler = () => {
        props.incButton()
    }

    const resetButtonHandler = () => {
        props.resetButton()
    }

    const countError = props.number === props.maxNumber
    || props.minNumber < 0
    || props.minNumber >= props.maxNumber ? 'NumberError' : '';
    const number = props.minNumber < 0 || props.minNumber >= props.maxNumber
        ? "Incorrect value!" : props.number;
    const incDisabled = number === props.maxNumber
        || props.minNumber < 0
        || props.minNumber >= props.maxNumber;
    const resetDisabled = props.minNumber < 0 || props.number < props.maxNumber;


    return (
        <div>
            <div className="AppInput">
                <div className="AppInputCount">
                    <div className={countError}>{number || props.value}</div>
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