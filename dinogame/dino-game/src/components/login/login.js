import React, { useEffect, useState } from "react";
import './login.css';
import config from '../../config';
const LoginRegister = () => {
    // const [isLogin, setIsLogin] = useState(true);

    // const toggleForm = () => {
    //     setIsLogin(!isLogin);
    // };
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page refresh

        try {
            const response = await fetch(`${config.apiUrl}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
           
            // Handle successful login (e.g., store token, redirect)
            console.log('Login successful:', data);
            if (data.message === "User registered successfully") {
                localStorage.setItem('user', JSON.stringify({ id: data.user.id, name: data.user.name, email: data.user.email }));
                window.location.href = "/dinogame"
            }

        } catch (err) {
            //   setError(err.message);
        }
    };
    const fetchScores = async () => {
        try {
            const response = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs/random');

            if (!response.ok) {
                throw new Error('Failed to fetch scores');
            }

            const scores = await response.json();
            console.log('Scores retrieved:', scores);
            setData(scores)
            // Handle the retrieved scores (e.g., update state)
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    // Call fetchScores when needed, e.g., in a useEffect or on button click
    useEffect(() => {
        fetchScores();
    }, []);
    console.log(data)
    console.log('All environment variables:',config.apiUrl );
    
    return (

        <div className="materialContainer">
            <div className={`box`}>
                <div className="title">{"LOGIN"}</div>

                <div className="input">
                    {/* <label htmlFor={isLogin ? "name" : "regname"}>{isLogin ? "Username" : "Username"}</label> */}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder="Username" name={"name"} id={"name"} />
                    <span className="spin"></span>
                </div>

                <div className="input">
                    {/* <label htmlFor={isLogin ? "pass" : "regpass"}>{isLogin ? "Password" : "Password"}</label> */}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"} placeholder="Password" name={"pass"} id={"pass"} />
                    <span className="spin"></span>
                </div>

                {/* {!isLogin && ( */}
                    {/* <div className="input">
                        <label htmlFor="reregpass">Repeat Password</label>
                        <input type="password" name="reregpass" id="reregpass" />
                        <span className="spin"></span>
                    </div> */}
                {/* )} */}
                <div className={`button login`}>
                    <button onClick={handleLogin}>
                        <span>{"GO"}</span>
                         <i className="fa fa-check"></i>
                    </button>
                </div>

                {/* {isLogin && ( */}
                    {/* <a href="/" className="pass-forgot">Forgot your password?</a> */}
                {/* )} */}
            </div>

            {/* <div className="overbox" onClick={toggleForm}>
                <div className="material-button alt-2">
                    <span className="shape"></span>
                </div>
            </div> */}

            <div className="cards">
            <div className="card red">
                <p className="tip">{data.Name}</p>
                <p className="second-text">{data.Description}</p>
            </div>
        </div>
        </div>

    );
};

export default LoginRegister;
