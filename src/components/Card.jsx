import React, { useState, useEffect } from 'react';
import "../static/css/Card.css";
import data from "../assets/data.json";

function Card() {
    const [age, setAge] = useState(data.Age);

    useEffect(() => {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        
        if (currentDay === 12 && currentMonth === 4) {
            setAge(age + 1);
        }
    }, []);

    return (
        <>
            <div className="Card User">
                <img src="../static/img/HURB.jpg" alt="me" className="HurB" />
                <h1>HurBC</h1>
                <p className='textCard p1'>I'm HurB an 18 year old programmer from Chile, I'm currently finishing my studies as a FullStack web developer in python.</p>
                <p className='textCard p2'>I enjoy programming and learning new languages such as C sharp along with new Frameworks such as REACT or .NET.</p>
                <div className="boxCard">
                    <h3>About Me</h3>
                    <div className="xob">
                        <div className="oxb">
                            <img src="../static/img/skull.png" className="skull icons" alt="NANA NANA NANA" />
                            <p>Age</p>
                        </div>
                        <p>{age}</p>
                    </div>
                    <div className="xob">
                        <div className="oxb">
                            <img src="../static/img/birthday-cake-8bit-pixel-illustration-png.webp" className="cake icons" alt="C.A.K.E" />
                            <p>Birthday</p>
                        </div>
                        <p>12/04</p>
                    </div>
                    <div className="xob">
                        <div className="oxb">
                            <img src="../static/img/heart.gif" className="heart icons" alt="HeartGif" />
                            <p>Favorite Languages</p>
                        </div>
                        <p>JS and CS</p>
                    </div>
                    <div className="xob">
                        <div className="oxb">
                            <img src="../static/img/folder.png" className="heart icons" alt="FolderGif" />
                            <p>Specialization</p>
                        </div>
                        <p>WEB developer</p>
                    </div>
                    <div className="xob">
                        <div className="oxb">
                            <img src="../static/img/Coffee.gif" className="heart icons" alt="CoffeeGif" />
                            <p>I love Coffee</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
