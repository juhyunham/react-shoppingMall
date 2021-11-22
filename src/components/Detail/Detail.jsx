import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Stock from "../Stock/Stock";

let DetailStyled = styled.div`
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        margin-bottom: 30px;
    }

    .alert {
        padding: 20px;
        background-color: #ffd968;
        color: #333;
        font-weight: bold;
    }

    .img_wrap {
        img {
            width: 100%;
            max-width: 800px;
        }
    }

    h4 {
        font-size: 25px;
    }

    p {
        padding-top: 15px;
    }

    .button_wrap {
        margin-top: 20px;

        .btn {
            padding: 10px;
            margin-left: 10px;
            border-radius: 5px;

            &:first-child {
                margin-left: 0;
            }

            &.btn_order {
                background-color: pink;
            }

            &.btn_back {
                background-color: skyblue;
            }
        }
    }
`;

function Detail(props) {
    let { id = 1 } = useParams();
    const history = useHistory();

    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);

    let product = props.shoes.find(function (prod) {
        return prod.id === Number(id);
    });

    return (
        <DetailStyled>
            <div className="container">
                {showAlert && (
                    <div className="alert">재고가 얼마 남지 않았습니다.</div>
                )}
                <div className="img_wrap">
                    <img
                        src={
                            "https://juhyunham.github.io/image/shop/shoes" +
                            product.id +
                            ".jpg"
                        }
                        alt="신발이미지"
                    />
                </div>
                <div className="info_wrap">
                    <h4>{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>

                    <Stock
                        stock={props.hasStock}
                        onClick={() => {
                            props.setHasStock([...props.hasStock][0] - 1);
                        }}
                    />

                    <div className="button_wrap">
                        <button type="button" className="btn btn_order">
                            주문하기
                        </button>
                        <button
                            type="button"
                            className="btn btn_back"
                            onClick={() => {
                                history.push("/");
                            }}
                        >
                            뒤로가기
                        </button>
                    </div>
                </div>
            </div>
        </DetailStyled>
    );
}

export default Detail;
