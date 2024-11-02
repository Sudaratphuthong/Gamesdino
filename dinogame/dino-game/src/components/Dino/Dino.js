import React, { useEffect, useRef, useState } from "react";
import "./Dino.css";
import config from '../../config';
function Dino() {
    //ref to get 'dino' html element in js
    const dinoRef = useRef();
    //ref to get 'cactus' html element in js
    const cactusRef = useRef();
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const [showBoom, setShowBoom] = useState(false);
    //method to add 'jump' class every '300ms' as the class jump css has jumping animation of 0.3s(300ms).
    //so on each key press we need to add animation and remove animation
    const jump = () => {
        if (!!dinoRef.current && dinoRef.current.classList != "jump") {
            dinoRef.current.classList.add("jump");
            setTimeout(function () {
                dinoRef.current.classList.remove("jump");
            }, 300);
        }
    };

    //useEffect to track whether dino position and cactus position is intersecting
    //if yes, then game over.
    useEffect(() => {
        const isAlive = setInterval(function () {
            // get current dino Y position
            const dinoTop = parseInt(
                getComputedStyle(dinoRef.current).getPropertyValue("top")
            );

            // get current cactus X position
            let cactusLeft = parseInt(
                getComputedStyle(cactusRef.current).getPropertyValue("left")
            );

            // detect collision
            if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140 && !showBoom) {
                setShowBoom(true); // Trigger explosion effect
                setTimeout(() => {
                    setShowBoom(false); // Hide explosion after 1 second
                    handlePointInsert()
                    alert("Game Over! Your Score : " + score);
                    setScore(0); // Reset score only after explosion completes
                }, 500);
                // collision
                // alert("Game Over! Your Score : " + score);
                // setScore(0);
            } else {
                setScore(score + 1);
            }
        }, 10);

        return () => clearInterval(isAlive);
    });
    const handlePointInsert = async (e) => {
        // e.preventDefault(); // Prevent page refresh
        const username = JSON.parse(localStorage.getItem('user'))?.email;
        
        const point = score
        try {
            const response = await fetch(`${config.apiUrl}/api/pointregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, point }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // Handle successful login (e.g., store token, redirect)
            console.log('Login successful:', data);
            //if (data.message === "Point registered successfully") {

            // }

        } catch (err) {
            //   setError(err.message);
        }
    };
    const fetchScores = async () => {
        try {
            const response = await fetch(`${config.apiUrl}/api/scores`);

            if (!response.ok) {
                throw new Error('Failed to fetch scores');
            }

            const scores = await response.json();
            setData(scores)
            console.log('Scores retrieved:', scores);
            // Handle the retrieved scores (e.g., update state)
        } catch (err) {
            console.error('Error:', err.message);
        }
    };

    // Call fetchScores when needed, e.g., in a useEffect or on button click
    useEffect(() => {
        fetchScores();
    }, []);
    //hook to call jump method on any keypress
    useEffect(() => {
        document.addEventListener("keydown", jump);
        return () => document.removeEventListener("keydown", jump);
    }, []);
  
    return (
        <div className="game">
            {/* Score : {score
            } */}
            <div
            style={{
                maxHeight: '5px',  // Set maximum width
                
            }}
        >

                <table className="container">
                    <thead>
                        <tr>
                            <th><h1>Username</h1></th>
                            <th><h1>Point</h1></th>
                            <th><h1>Time</h1></th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.point}</td>
                                <td>{item.time}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div id="dino" ref={dinoRef}></div>
            <div id="cactus" ref={cactusRef} style={{ display: !showBoom ? "" : "none", }} ></div>
            {showBoom && (
                <div
                    className="explosion"
                    style={{
                        top: "550px",
                        left: "80px",
                        display: showBoom ? "" : "none",
                    }}

                ></div>
            )}
        </div>

    );
}

export default Dino;
