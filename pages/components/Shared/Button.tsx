import React from 'react';

interface ButtonProps {
    text: string;
    bgColor: string;
    textColor: string;
    handler?: () => void; // Optional handler function
}

const Button = ({ text, bgColor, textColor, handler = () => {} }: ButtonProps) => {
    return (
        <button 
            className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
            onClick={handler} // Attach the handler to the onClick event
        >
            {text}
        </button>
    );
}

export default Button;