import "./App.css";
import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Container from "./components/Container/Container";
import Detail from "./components/Detail/Detail";
import Cart from "./Cart";
import Data from "./data";
import axios from "axios";

import { Route } from "react-router-dom";

function App() {
    let [shoes, setShoes] = useState(Data);
    let [count, setCount] = useState(2);
    let [isLoading, setIsLoading] = useState(false);
    let [hasStock, setHasStock] = useState([10, 11, 12]);

    return (
        <div className="App">
            <Navbar />

            <Route exact path="/">
                <Main />
                <Container shoes={shoes} />
                {isLoading && <div className="loading"></div>}
                <button
                    type="button"
                    className="more_btn"
                    onClick={() => {
                        setIsLoading(true);
                        axios
                            .get(
                                "https://juhyunham.github.io/json/shop/data" +
                                    count +
                                    ".json"
                            )
                            .then((result) => {
                                setIsLoading(false);
                                setShoes([...shoes, ...result.data]);
                                setCount(count + 1);
                            })
                            .catch(() => {
                                setIsLoading(false);
                                console.log("실패했어요.");
                            });
                    }}
                >
                    더보기
                </button>
            </Route>

            <Route path="/detail/:id">
                <Detail
                    shoes={shoes}
                    hasStock={hasStock}
                    setHasStock={setHasStock}
                />
            </Route>

            <Route path="/cart">
                <Cart />
            </Route>
        </div>
    );
}

export default App;
