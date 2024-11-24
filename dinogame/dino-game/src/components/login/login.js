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

        // try {
        //     const response = await fetch(`${config.apiUrl}/api/register`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Login failed');
        //     }

        //     const data = await response.json();

        //     // Handle successful login (e.g., store token, redirect)
        //     console.log('Login successful:', data);
        //     if (data.message === "User registered successfully") {
        //         localStorage.setItem('user', JSON.stringify({ id: data.user.id, name: data.user.name, email: data.user.email }));
        //         window.location.href = "/dino"
        //     }

        // } catch (err) {
        //     //   setError(err.message);
        // }

        window.location.href = "/dino"
    };
    const fetchScores = async () => {
        try {
            //  const response = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs/random');
            const response = await fetch('https://api.thecatapi.com/v1/images/search');


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
        // เรียก fetchScores ทุก ๆ 5 วินาที
        const interval = setInterval(() => {
            fetchScores();
        }, 5000);

        // ล้าง interval เมื่อ component ถูก unmount
        return () => clearInterval(interval);
    }, []);

    // console.log(data[0].url)
    console.log('All environment variables:', config.apiUrl);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ alignItems:'center' , display:'flex', paddingTop:'17%' ,height: '600px', width: '500px'}}>
                {/* <p className="tip">{data.Name}</p> */}
                {/* <p className="second-text">{data.Description}</p> */}
                <img src={data[0]?.url} alt="Dynamic content" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="materialContainer">
                
                <div className={`box`}>





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

                    <div className="card blue">
                        <a href="/about" style={{ color: '#ffffff' }} >About</a>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default LoginRegister;
