import React, { forwardRef } from 'react';

const Square = forwardRef((props, ref) => {
    const {position, handleClick, cell, turn}= props;
    // console.log(ref);
    // console.log("ref");
    return (
        <button ref={el => ref ?  ref.current = el : ref} className={`border-2 border-black w-full md:h-40 h-20 text-center flex items-center justify-center shadow-xl rounded-xl bg-white border-none`} onClick={(e)=>handleClick(position)}>
            {cell}
        </button>
    );
});

export default Square;