'use client';
import React, {useState, useEffect} from 'react';

const getRandomValue = () => Math.round(Math.random());

const generateMatrix = () => {
    return Array.from({length: 6}, () => Array.from({length: 6}, () => getRandomValue()));
};

const GenMatrix = () => {
    const [matrix, setMatrix] = useState(generateMatrix());
    const colors = ['linear-gradient(#f807d4,#289b20, #ffb217)',
        "linear-gradient( #ffcc00, #ffb217,#ec7c1a)",
        "linear-gradient( #f89b20, #ed7c1a,  #be6323)",
        "linear-gradient( #ec7c1a,  #be6323, #e518f0)",
        "linear-gradient( #f807d4, #ffcc00, #ffb217)",
        "linear-gradient( #be6323, #ec7c1a,#ff2984e4)",
        "linear-gradient(#289b20,  #be6323, #ec7c1a)",
        "linear-gradient( #be6323,#ed3ddd,#cc5edd)",
        "lifronear-gradient(#f807d4, #e518f0, #8b6398)",
        'orange',
        'gray',
        "yellow",
        'green',
        'orangered',
        "blue",
        'pink'

    ];
    const [color1, setColor1] = useState('orange');
    const [color2, setColor2] = useState('blue');

    useEffect(() => {
        const interval = setInterval(() => {
            setMatrix(generateMatrix());

            setColor1(prevColor1 => {
                let newColor1 = colors[Math.floor(colors.length * Math.random())];
                if(!colors.includes(newColor1)) {
                    newColor1 = prevColor1
                }
                return newColor1;
            });

            setColor2(prevColor2 => {
                let newColor2 = colors[Math.floor(colors.length * Math.random())];
                if(!colors.includes(newColor2)) {
                    newColor2 = prevColor2
                }
                return newColor2;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const matrixContainer = document.getElementById('matrixContainer');
        if(matrixContainer) {
            matrixContainer.innerHTML = '';

            matrix.forEach((row, rowIndex) => {
                const rowDiv = document.createElement('div');
                rowDiv.style.display = 'flex';
                rowDiv.style.transition = 'transform 1s';
                rowDiv.style.transform = 'translateX(0)'; // Apply initial transform state for row animation

                row.forEach((value, colIndex) => {
                    const elementDiv = document.createElement('div');
                    elementDiv.style.width = '55px';
                    elementDiv.style.height = '55px';
                    elementDiv.style.display = 'flex';
                    elementDiv.style.justifyContent = 'center';
                    elementDiv.style.alignItems = 'center';
                    elementDiv.style.fontSize = '20px';
                    elementDiv.style.color = 'white';
                    elementDiv.style.background = value ? color1 : color2;
                    elementDiv.style.borderRadius = '5px';
                    elementDiv.style.margin = '10px'; // Add padding to each element
                    elementDiv.textContent = value.toString(); // Set the text content (number) of the element

                    // Set initial transform state for the animation
                    const direction = Math.random() > 0.5 ? 'left' : 'right';
                    const initialTransform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
                    elementDiv.style.transform = initialTransform;

                    setTimeout(() => {
                        // Apply the visible transform state for the animation with a 5-second delay between each element
                        elementDiv.style.transition = 'transform 1s';
                        elementDiv.style.transform = 'translateX(0)';
                    }, 800 * colIndex);

                    rowDiv.appendChild(elementDiv);
                });

                matrixContainer.appendChild(rowDiv);
            });
        }
    }, [matrix, color1, color2]);

    return (
        <div>
            <h1 className='text-center font-bold text-[25px] bg-gradient-to-r from-amber-500 via-blue-600 to-yellow-500 bg-clip-text text-transparent'>
                Engpy Matrix Analyzer
            </h1>
            <div id='matrixContainer' className="overflow-x-hidden"></div>
        </div>
    );
};

export default GenMatrix;
