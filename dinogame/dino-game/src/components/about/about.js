import React, { useEffect, useState } from "react";
import './about.css';
import config from '../../config';
const About = () => {
    return (

        <div className="responsive-container-block bigContainer" style={{background:"#fff"}} >
            <div className="responsive-container-block Container bottomContainer">
                <div className="ultimateImg">
                    <image className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg"></image>
                    <div className="purpleBox">
                        <p className="purpleText">
                        Assist.Prof.Dr.Chaiyaporn Khemapatpapan,Ph.D <br/>
                        Experienced<br/>
                        Cloud Computing, Cyber Security, Machine Learning, Computer Networks, Database System
                        </p>
                        <image className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"></image>
                    </div>
                </div>
                <div className="allText bottomText">
                    <p className="text-blk headingText">
                        About Me
                    </p>
                    <p className="text-blk subHeadingText">
                    Sudarat Phuthong 66130835 <br/>
                    
                    Master of Engineering Program in Computer Engineering College of Engineering and Technology
                    
                    </p>
                    <p className="text-blk description">
                    Graduated with a bachelor's degree in the Faculty of Fine and Applied Arts. Department of Fashion Design and Business Dhurakij Pundit University
                    </p>
                    
                </div>
            </div>
           
            
        </div>


    );
};

export default About;