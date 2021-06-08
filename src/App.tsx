import React from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Count} from "./Count";

function App() {

  /*  useEffect(() => {
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
    }, [maxNumber, minNumber, number, disable, value]);*/

    return (
        <div className="App">
            <div className="AppItem">
                <Settings/>
            </div>
            <div className="AppItem">
                <Count/>
            </div>
        </div>
    );
}

export default App;


