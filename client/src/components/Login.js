import React, {useState} from "react";
import {Component} from "react";
import './Register.css';
import NavBar from './NavBar/loginNavBar'
import './Login.css'

const Login = () => {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePassInput = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email == '' || pass == '') {
            setError(true)
        } else {
            const data = {
                "email": email,
                "password": pass
            };
            await fetch("http://localhost:3001/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    if (data.message == "Auth successful") {
                        alert("You are logged in.");

                    } else
                        alert("Please check your login information.");
                });
        }
    }
    return (
        <div >
            <NavBar/>
            <form id="main" >
                <div className="login-main" >
                    <h3>Login</h3>
                    <div className="mb-3" >
                        <label>Email address :</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                               onChange={handleEmailInput}/>
                    </div>
                    <div className="mb-3">
                        <label>Password :</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                               onChange={handlePassInput}/>
                    </div>
                    <br/>
                    <div className="d-grid">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>


    );
};

export default Login;