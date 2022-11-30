import React from 'react';
import Square from './Square';

const Board = (props) => {
    const {cells, handleClick, turn} = props;
 
    return (
        <div className={`grid grid-cols-3 max-w-[700px] mx-auto text-5xl font-bold ${turn === "x" ? "text-red-600" : "text-blue-600"}`}>
            {cells.map((cell, index)=><Square key={index} handleClick={handleClick} position={index} />)}   
        </div>
    );
};


export default Board;