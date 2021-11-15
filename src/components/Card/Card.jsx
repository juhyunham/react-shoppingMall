import React from "react";

const Card = ({ shoe }) => {
    return (
        <li key={shoe.index} className="item">
            <img
                src={
                    "https://juhyunham.github.io/image/shop/shoes" +
                    shoe.id +
                    ".jpg"
                }
                alt="신발이미지"
                width="100%"
            />
            <h4>{shoe.title}</h4>
            <p>
                {shoe.content} &nbsp; {shoe.price}{" "}
            </p>
        </li>
    );
};

export default Card;
