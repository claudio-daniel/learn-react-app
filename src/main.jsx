import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstComponent } from "./FirstComponent";


import './styles.css'

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <FirstComponent />
            <CounterApp value={111}/>
        </React.StrictMode>
    )
