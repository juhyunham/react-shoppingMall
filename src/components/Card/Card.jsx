import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
    return (
        <li key={shoe.index} className="item">
            <Link to={"/detail/" + shoe.id}>
                <img
                    src={
                        "https://juhyunham.github.io/image/shop/shoes" +
                        shoe.id +
                        ".jpg"
                    }
                    alt="신발이미지"
                    width="100%"
                />
                <h4 className="shoes_title">{shoe.title}</h4>
                <p className="shoes_info">
                    {shoe.content} &nbsp; {shoe.price}
                </p>
            </Link>
        </li>
    );
};

export default Card;
