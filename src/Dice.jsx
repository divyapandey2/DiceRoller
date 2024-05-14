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
                return <img src="dice1.png" alt="1" width="18" height="18" />;
            case 2:
                return <img src="dice2.png" alt="2" width="18" height="18" />;
            case 3:
                return <img src="dice3.png" alt="3" width="18" height="18" />;
            case 4:
                return <img src="dice4.png" alt="4" width="18" height="18"/>;
            case 5:
                return <img src="dice5.png" alt="5" width="18" height="18" />;
            case 6:
                return <img src="dice6.png" alt="6" width="18" height="18" />;
           
        }
    };


    return (
<><button onClick={handleClick}>{roll()}</button>
<button onClick={handleClick}>{cube}</button>
        <button  onClick={handleClick}>Roll Me!
</button></>
        
    );
}

export default Dice;