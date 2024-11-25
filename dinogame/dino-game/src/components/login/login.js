import React, { useEffect, useState } from "react";
import './login.css';
import logo from '../Dino/img/logo.png';
const LoginRegister = () => {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(1);
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent page refresh
        window.location.href = "/dino"
    };
    const fetchScores = async (parameter) => {
        try {
            const response = await fetch('https://dinoapi.brunosouzadev.com/api/dinosaurs');
            if (!response.ok) {
                throw new Error('Failed to fetch scores');
            }
            const scores = await response.json();
            setData(scores[parameter])
            // Handle the retrieved scores (e.g., update state)
        } catch (err) {
            console.error('Error:', err.message);
        }

    };
    useEffect(() => {
        // First fetch immediately when component mounts
        fetchScores(counter);
    
        // Start the interval to fetch after a 5-second delay
        const interval = setInterval(() => {
          setCounter(prevCounter => {
            const nextCounter = prevCounter > 18 ? 1 : prevCounter + 1;
            fetchScores(nextCounter); // Fetch with the updated counter
            return nextCounter;
          });
        }, 5000);
    
        // Delay the start of the interval by 5 seconds
        const delayInterval = setTimeout(() => {
          clearInterval(interval); // Clear the immediate interval
          // Re-start the interval after the delay
          setInterval(() => {
            setCounter(prevCounter => {
              const nextCounter = prevCounter > 18 ? 1 : prevCounter + 1;
              fetchScores(nextCounter);
              return nextCounter;
            });
          }, 5000);
        }, 5000);
    
        // Clean up the intervals when the component unmounts
        return () => {
          clearInterval(interval);
          clearTimeout(delayInterval);
        };
      }, [counter]);
    return (
        <div>
            {/* <div style={{ width:"50%" }} className="materialContainerDino" >
                <p className="second-text">{data?.description}</p>
                <img src={data?.image} alt="Dynamic content" style={{ height: '100%', width: '100%' }} />
            </div> */}
            <div className="materialContainer">
            <img src={logo} alt="Dynamic content" style={{ height: '100%', width: '100%' }} />

                <div className={`box`}>
                    <div className={`button login`}>
                        <button onClick={handleLogin}>
                            <span>{"GO"}</span>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                </div>
                <div className="cards">

                    <div className="card blue">
                        <a href="/about" style={{ color: '#ffffff' }} >About</a>
                    </div>
                </div>
            </div>
            <div className="materialContainerDino">
                <div className={`box`}>
                    <p className="second-text">{data?.description}</p>
                </div>
                <div className="cards">
                    <img src={data?.image} alt="Dynamic content" style={{ height: '100%', width: '100%' }} />

                </div>
            </div>
        </div>



    );
};

export default LoginRegister;
