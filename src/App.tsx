import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Count} from "./Count";

function App() {
    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [minNumber, setMinNumber] = useState<number>(0)
    let [number, setNumber] = useState<number>(0)
    const [disable, setDisable] = useState<boolean>(false)
    let [value, setValue] = useState<string>('Start!')

    useEffect(() => {
        debugger;
        let getTitle = localStorage.getItem('title')
        if (getTitle) {
            let newTitle = JSON.parse(getTitle)
            setMaxNumber(newTitle.maxNumber)
            setMinNumber(newTitle.minNumber)
            setDisable(newTitle.disable)
            setNumber(newTitle.minNumber)
            setValue(newTitle.value)
        }
    }, []);

    useEffect(() => {
        debugger;
        localStorage.setItem('title', JSON.stringify({
            maxNumber: maxNumber,
            minNumber: minNumber,
            number: minNumber,
            value: value,
            disable: disable
        }))
    }, [maxNumber, minNumber, number, disable, value]);

    function changeMaxNumber(number: number) {
        setMaxNumber(number)
        setDisable(false)
    }

    function changeMinNumber(number: number) {
        setMinNumber(number)
        setDisable(false)
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
                       disable={disable}
                       value={value}
                       number={number}/>
            </div>
        </div>
    );
}

export default App;


