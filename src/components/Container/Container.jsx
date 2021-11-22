import React from "react";
import "./Container.css";
import Card from "../Card/Card";

const Container = ({ shoes }) => {
    return (
        <div className="container">
            <ul className="row">
                {shoes.map((item, index) => {
                    return <Card key={index} shoe={item} />;
                })}
            </ul>
        </div>
    );
};

export default Container;
