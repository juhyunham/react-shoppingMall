import React from "react";
import { connect } from "react-redux";
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
`;

function Cart(props) {
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
                        <tr>
                            <td>1</td>
                            <td>{props.state[0].name}</td>
                            <td>{props.state[0].quan}</td>
                            <td>
                                <button type="button">증가</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CartStyled>
    );
}

function functionStateProps(state) {
    return {
        state: state,
    };
}

export default connect(functionStateProps)(Cart);

// export default Cart;
