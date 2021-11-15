import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Container from "./components/Container/Container";
import Detail from "./components/Detail/Detail";
import Data from "./data";

import { Route, Switch } from "react-router-dom";

function App() {
    let [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <Navbar />

            <Route exact path="/">
                <Main />
                <Container shoes={shoes} />
            </Route>

            <Route path="/detail/:id">
                <Detail shoes={shoes} />
            </Route>
        </div>
    );
}

export default App;
