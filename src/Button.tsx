import React from "react";

type ButtonPropsType = {
    funcButton: () => void
    title: string
    disableButton: boolean
}

export function Button({funcButton, title, disableButton}: ButtonPropsType) {

    const ButtonHandler = () => {
        funcButton()
    }

    return (
        <>
            <button className='ButtonItem'
                    disabled={disableButton}
                    onClick={ButtonHandler}>{title}
            </button>
        </>
    )
}