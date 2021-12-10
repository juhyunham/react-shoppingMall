import React from "react";
import styled from "styled-components";

let WatchedStyled = styled.div`
    .quick_watched {
        position: fixed;
        top: 50%;
        right: 0;
        background-color: #fff;
        padding: 15px;
        transform: translateY(-50%);
        border-radius: 16px;
        border: 1px solid #888;
        font-size: 13px;

        h3 {
            font-size: 16px;
        }

        li {
            padding: 10px 0;
            border-top: 1px solid #888;

            &:first-child {
                border-top: 0;
            }
        }
    }
`;

const Watched = ({ shoes }) => {
    return (
        <WatchedStyled>
            <div className="quick_watched">
                <h3>최근본 상품</h3>
                <ul>
                    {Array.from(JSON.parse(localStorage.watched)).map(
                        (item) => {
                            let shoe = shoes.find(
                                (shoe) => shoe.id === Number(item)
                            );
                            return (
                                <li key={shoe.id}>
                                    <div>상품명 : {shoe.title} </div>
                                    <div>상품가격: {shoe.price} </div>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </WatchedStyled>
    );
};

export default Watched;
