import React, {useState} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Count} from "./Count";

function App() {
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [minNumber, setMinNumber] = useState<number>(0)
    let [number, setNumber] = useState<number>(0)
    const [disable, setDisable] = useState<boolean>(false)
    const [value, setValue] = useState<string>('start')

    function changeMaxNumber(number: number) {
        setMaxNumber(number)
        setDisable(false)
        if (maxNumber >= 0) {
            setValue(value)
        }
    }

    function changeMinNumber(number: number) {
        setMinNumber(number)
        setDisable(false)
        if (minNumber >= 0) {
            setValue(value)
        }
    }

    function changeSettings() {
        if (minNumber < maxNumber && minNumber >= 0) {
            setNumber(number = minNumber)
        }
    }

    function disableButton() {
        if (number === minNumber) {
            setDisable(true)
        }
    }

    function incButton() {
        if (number !== maxNumber) {
            setNumber(number + 1)
        }
    }

    function resetButton() {
        if (number === maxNumber) {
            setNumber(number = minNumber)
        }
    }

    return (
        <div className="App">
            <div className="AppItem">
                <Settings changeMaxNumber={changeMaxNumber}
                          changeMinNumber={changeMinNumber}
                          changeSettings={changeSettings}
                          disable={disable}
                          disableButton={disableButton}
                          minNumber={minNumber}
                          maxNumber={maxNumber}/>
            </div>
            <div className="AppItem">
                <Count incButton={incButton}
                       resetButton={resetButton}
                       minNumber={minNumber}
                       maxNumber={maxNumber}
                       value={value}
                       number={number}/>
            </div>
        </div>
    );
}

export default App;


