import React, {ChangeEvent} from "react";

type SettingsInputPropsType = {
    changeInput: (number: number) => void
    title: string
    style: Object
    number: number
}

export function SettingInput({changeInput, title, style, number}: SettingsInputPropsType) {

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeInput(Number(e.currentTarget.value))
    }

    return (
        <>
            <div className="AppInputMain">
                <div>
                    {title}
                </div>
                <input style={style}
                       onChange={changeInputHandler}
                       value={number}
                       type="number"/>
            </div>
        </>

    )
}