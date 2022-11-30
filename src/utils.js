 const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  export const checkForWinner = (squares) => {

    for (let i = 0; i < patterns.length; i++) {
      const [x, y, z] = patterns[i];
      if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
        return true
      }
    }

  }