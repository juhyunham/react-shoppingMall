import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const CartStyled = styled.div`
    table {
        table-layout: fixed;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }

    table th {
        background-color: #e2e0e0;
        padding: 10px 0;
    }

    table td {
        padding: 10px 20px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        word-break: break-all;
    }

    button {
        border: 1px solid #333;
        font-size: 15px;
        margin-left: 5px;
        background-color: #fff;
        box-sizing: border-box;
        min-width: 25px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`;

function Cart(props) {
    let state = useSelector((state) => state);
    const dispatch = useDispatch();
    const style = { color: "white" };

    return (
        <CartStyled>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>변경</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quan}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                dispatch({
                                                    type: "plus",
                                                    data: item.id,
                                                });
                                            }}
                                        >
                                            +
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                dispatch({
                                                    type: "minus",
                                                    data: item.id,
                                                });
                                            }}
                                        >
                                            -
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </CartStyled>
    );
}

// function functionStateProps(state) {
//     return {
//         state: state,
//     };
// }

// export default connect(functionStateProps)(Cart);

export default Cart;
