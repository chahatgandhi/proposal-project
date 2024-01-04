import React, { useState } from 'react';
import './GreetingCard.css'; // Import the CSS file

function GreetingCard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
            <div className="front">
                Click to Open
            </div>
            <div className="inside">
                <h1>Greetings!</h1>
                <p>Wishing you a wonderful day!</p>
            </div>
        </div>
    );
}

export default GreetingCard;
