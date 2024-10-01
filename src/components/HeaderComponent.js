import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    let [btnName, setBtnName] = useState('Login');

    // if no dependency array => useEffect is called  every render
    // if dependency array is empty => then useEffect is called on initial render (just once)
    // if dependency array is [btnName] => then called everytime btnName changed.
    useEffect(() => {
        console.log('useEffect called')
    }, [btnName]);

    return (
        <div className="header">
            <div className="logo">
                <img src={ LOGO_URL }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                        Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={() => btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;