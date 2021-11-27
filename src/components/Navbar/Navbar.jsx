import React from "react";
import styled from "styled-components";
// import CartIcon from "../../images/shopping-cart.svg";

import { Link } from "react-router-dom";

let NavStyled = styled.div`
    .header_top_wrap {
        position: relative;

        .cart {
            display: flex;
            position: absolute;
            top: 0;
            right: 10px;
            width: 40px;
            height: 40px;
            align-items: center;
            background-color: pink;
            border-radius: 10px;
            font-size: 13px;
            color: #fff;
            justify-content: center;
        }

        h1 {
            padding: 0 50px;
        }
    }

    .link_wrap {
        padding: 20px 0;
        background-color: #f1f3f3;

        a {
            padding: 20px;
            color: #333;
            text-decoration: none;
        }
    }
`;

const Navbar = (props) => (
    <NavStyled>
        <nav>
            <div className="header_top_wrap">
                <h1>Shoe Shop</h1>
                <Link className="cart" to="/cart">
                    카트
                </Link>
            </div>
            <div className="link_wrap">
                <Link to="/">Home</Link>
                <Link to="/detail/1">Detail</Link>
            </div>
        </nav>
    </NavStyled>
);

export default Navbar;
