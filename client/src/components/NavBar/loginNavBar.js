import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './navbar.css'

const LoginNavBar = () => {
    return (
        <nav className="nav_main" >
            <li><a className="Swapy">Swapy</a></li>
            <ul>
                <li>
                    <a herf="nav_li">
                        <Link href="" to='/'>Login</Link>
                    </a>
                </li>
                <li>
                    <a herf="nav_li" >
                        <Link href="" to='/signup'>Sign Up</Link>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default LoginNavBar;