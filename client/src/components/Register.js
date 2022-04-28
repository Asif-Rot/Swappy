import React, {useEffect, useRef, useState} from "react";
import NavBar from './NavBar/loginNavBar';
import {Link} from "react-router-dom";
import './Register.css'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [last_name, setLName] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleLName = (e) => {
        setLName(e.target.value);
        setSubmitted(false);
    };
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || last_name) {
            setError(true);

        } else {
            const data = {
                "email": email,
                "password": password
            };
            await fetch("http://localhost:3001/user/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log(data)
                });


            setName("");
            setEmail("");
            setPassword("");
            setLName("");
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <div >
            <NavBar/>
            <div className="main" >
                <form className="reg-main">
                    <h3 >Sign Up</h3>
                    <div className="messages">
                        {errorMessage()}
                        {successMessage()}
                    </div>
                    <div className="first-name">
                        <label>First name : </label>
                        <input onChange={handleName} value={name} type="text"
                               className="form-control"
                               placeholder="First name"
                        />
                    </div>
                    <div className="last-name">
                        <label>Last name : </label>
                        <input type="text"
                               className="form-control"
                               placeholder="Last name"
                               onChange={handleName}
                        />
                    </div>
                    <div className="email">
                        <label>Email : </label>
                        <input onChange={handleEmail}
                               value={email}
                               type="email"
                               className="form-control"
                               placeholder="Enter email"/>
                    </div>
                    <div className="password">
                        <label>Password : </label>
                        <input onChange={handlePassword}
                               value={password}
                               type="password"
                               className="form-control"
                               placeholder="Enter password"/>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered
                        <Link href="" to='/login'>sign in?</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Register;