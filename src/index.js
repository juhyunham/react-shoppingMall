import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

let initialArr = [
    {
        id: 0,
        name: "멋진신발",
        quan: 2,
    },
    {
        id: 1,
        name: "예쁜옷",
        quan: 5,
    },
];

function reducer(state = initialArr, action) {
    if (action.type === `plus`) {
        let copy = [...state];
        copy[action.data].quan++;
        return copy;
    } else if (action.type === `minus`) {
        let copy = [...state];
        // copy[0].quan--;
        if (copy[action.data].quan < 1) {
            copy[action.data].quan = 0;
        } else {
            copy[action.data].quan--;
        }
        return copy;
    } else {
        return state;
    }
}

let store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
