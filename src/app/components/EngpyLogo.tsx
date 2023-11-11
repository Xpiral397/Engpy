'use client'

import {InputDataProps} from '@/types/componentBased/types';
import React, {useEffect} from 'react';

const EngpyLogo: React.FC<InputDataProps> = ({size}) => {
    const pathData = "M45,100 Q80,50 115,100 Q150,150 155,100 Q160,50 195,100";
    const textStyle = {
        fontSize: "80px",
        fontWeight: "normal",
        fill: "white",
        fontFamily: "'Pacifico', cursive",
        textShadow: "2px 2px 4px rgb(0, 50, 90)",
    };

    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
            {/* Curvy background */}
            < path d={pathData} fill="blue" stroke="none" />

            {/* Decorative 'Engpy' */}
            < text x="28" y="150" style={textStyle} > Engp</text>
        </svg >
    );
};

export default EngpyLogo;

