import React, { useState } from 'react';
import './App.css';

function Dice() {
    const [cube, setCube] = useState(1);
    

    const handleClick = () => {

        const newValue = Math.floor(Math.random() * 6) + 1;
        setCube(newValue);
        

    };
    const roll = () => {
        switch (cube) {
            case 1:
                return <img className="imgC" src="dice1.png" alt="1" width="150" height="150" />;
            case 2:
                return <img className="imgC" src="dice2.png" alt="2" width="150" height="150"  />;
            case 3:
                return <img className="imgC" src="dice3.png" alt="3" width="150" height="150"  />;
            case 4:
                return <img className="imgC" src="dice4.png" alt="4" width="150" height="150" />;
            case 5:
                return <img className="imgC" src="dice5.png" alt="5" width="150" height="150" />;
            case 6:
                return <img className="imgC" src="dice6.png" alt="6" width="150" height="150"  />;
           
        }
    };


    return (
<> <div><button className='diceRoll' onClick={handleClick}>{roll()}</button></div>
<br></br>
<div><button  onClick={handleClick}>{cube}</button></div>
<br></br>
<div>   <button  onClick={handleClick}>Roll Me!
</button></div></>
        
    );
}

export default Dice