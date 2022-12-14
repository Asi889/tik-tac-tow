import React from 'react';

const ScoreBoard = ({score, turn}) => {
    return (
        <div className="w-fit mx-auto">
        <div className="flex gap-x-20 justify-center mx-auto max-w-fit md:mt-20 mt-10 p-4">
          <div className="min-w-fit relative">
            <div className="text-red-600 text-4xl md:text-6xl font-semibold p-1 ">x-{score.x}</div>
            {turn === "x" ? <div className={`md:h-2 h-1  bg-red-600 red_line liner absolute rounded-xl ${turn === "x" ? "" : ""} `}></div> : ""}
          </div>
          <div className="min-w-fit relative">
            <div className="text-blue-600 text-4xl md:text-6xl font-semibold p-1">o-{score.o}</div>
            {turn === "o" ? <div className={`h-1 md:h-2  bg-blue-600 liner absolute duration-500 rounded-xl ${turn === "o" ? "red_line" : "blue_line"}`}></div> : ""}
          </div>

        </div>

      </div>
    );
};


export default ScoreBoard;