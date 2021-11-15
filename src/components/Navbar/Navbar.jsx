import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

let NavStyled = styled.div`
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
            <h1>Shoe Shop</h1>
            <div className="link_wrap">
                <Link to="/">Home</Link>
                <Link to="/detail/1">Detail</Link>
            </div>
        </nav>
    </NavStyled>
);

export default Navbar;
