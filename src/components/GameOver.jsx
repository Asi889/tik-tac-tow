import React from 'react';

const GameOver = (props) => {
    const {winner, resetBoard } = props
    return (
        <div id="winnerCard" className={`md:p-20 p-10 text-3xl grid bg-gray-400  blur-none absolute top-2/4 left-1/2 -translate-y-2/4 -translate-x-2/4 rounded-xl shadow-2xl`}>
            <div className="text-white text-center">{winner === "tie" ? "its a Draw!" : "Winner is:"} <span className={`text-6xl ${winner === "x" ? "text-red-600" : "text-blue-600"}`}>{winner === "tie" ? "" : winner}</span> </div>
            <button onClick={resetBoard} className="mt-10 bg-gray-200 rounded-xl border-2 p-3 shadow-xl active:bg-gray-300 border-none">Reset</button>
        </div>
    );
};



export default GameOver;