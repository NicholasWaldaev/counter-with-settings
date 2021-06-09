import React from 'react';
import './App.css';
import {Settings} from "./Settings";
import {Count} from "./Count";

function App() {
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


