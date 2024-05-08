import React, { useState, useEffect } from 'react';

const SquareGrid = () => {

    const initialSquares = new Array(60);
    for (let i = 0; i < initialSquares.length; i++) {
        initialSquares[i] = 'black';
    }

    const [squares, setSquares] = useState(initialSquares);

    useEffect(() => {
        const interval = setInterval(() => {
            let whiteCount = 0;
            const updatedSquares = squares.map((square, index) => {
                if (square === 'white') {
                    whiteCount++;
                    return 'white';
                }
                if (whiteCount === index) {
                    return 'white';
                }
                return 'black';
            });
            setSquares(updatedSquares);
        }, 1000);

        return () => clearInterval(interval);
    }, [squares]);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 30px)', gap: '5px' }}>
            {squares.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: color,
                        border: '1px solid gray'
                    }}
                />
            ))}
        </div>
    );
};

export default SquareGrid;
