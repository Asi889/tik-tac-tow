import { createRef, useState } from 'react';
import './App.css';
import GameOver from './components/GameOver';
import ScoreBoard from './components/ScoreBoard';
import Square from './components/Square';
import { checkForWinner } from './utils'


function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [allRefs, setAllRefs] = useState(Array(9).fill().map((_, i) => createRef()));
  const [turn, setTurn] = useState('x');
  const [score, setScore] = useState({ x: 0, o: 0 })
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    if(winner === "x" || winner === "o"){
      console.log(winner);
      console.log("winner");
      setTurn(winner)
    }
    if(winner === " tie"){
      setWinner(turn)
    }
    setWinner(null);
    setCells(Array(9).fill(""))
    let clonedRefs = [...allRefs]
    clonedRefs.map((clone) => clone.current.classList.remove("text-blue-600", "text-red-600"))
    setAllRefs(clonedRefs)
  }

  const handleClick = (index) => {
    
    const refs = [...allRefs]

    if (winner) return
    if (cells[index] !== "") {
      alert("already taken")
      return
    }
    const squares = [...cells];

    if (turn === "x") {
      squares[index] = "x";
      refs[index].current.classList.add("text-red-600")
      setTurn((prev) => prev = "o")
    } else {
      squares[index] = "o";
      refs[index].current.classList.add("text-blue-600")
      setTurn((prev) => prev = "x")
    }

    setAllRefs(refs)
    setCells(squares)

    const cellsCheck= squares.some(cel=> cel === "");
    if(!cellsCheck){
      setWinner("tie");
      

    }
    if (checkForWinner(squares)) {
      console.log(checkForWinner(squares));
      setWinner(turn)

      if (turn === "x") {
        setScore(prev => {
          return ({
            ...prev, x: prev.x + 1
          })
        })
        return
      }

      setScore(prev => {
        return ({
          ...prev, o: prev.o + 1
        })
      }) 
      // if(cells.le){
        
        // }
      }

    // console.log("in");
  }

  return (
    <div className={``}>
      <ScoreBoard turn={turn} score={score} />
      <div className="relative px-5">
        <div className={`Apdivp text-green-600 md:text-7xl text-5xl font-bold grid grid-cols-3 gap-4 max-w-[700px] mx-auto md:mt-20 mt-10 ${winner ? "blur-sm" : ""} `}>
          {cells.map((cell, index) => <Square ref={allRefs[index]} key={index} handleClick={handleClick} cell={cell} position={index} turn={turn} />)}
        </div>
        {winner && <GameOver winner={winner} resetBoard={resetBoard} />}
      </div>
    </div>
  );
}

export default App;
