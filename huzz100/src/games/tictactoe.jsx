
import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = (i) => {
    if (board[i] || winner || gameOver) return;

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    const newIsDraw = !newWinner && newBoard.every(square => square !== null);
    
    if (newWinner || newIsDraw) {
      setGameOver(true);
      setTimeout(() => {
        if (newWinner) {
          setScores(prev => ({
            ...prev,
            [newWinner]: prev[newWinner] + 1
          }));
        } else {
          setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
        }
      }, 1000);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, draws: 0 });
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const renderSquare = (i) => {
    const isWinningSquare = winner && getWinningSquares(board).includes(i);
    
    return (
      <button
        key={i}
        className={`w-20 h-20 border-2 border-cyan-400 bg-gray-900 text-4xl font-bold 
          transition-all duration-200 hover:bg-gray-800 hover:scale-105 
          ${board[i] === 'X' ? 'text-red-400' : 'text-blue-400'}
          ${isWinningSquare ? 'bg-green-700 animate-pulse' : ''}
          ${!board[i] && !winner && !gameOver ? 'hover:shadow-lg hover:shadow-cyan-400/50' : ''}`}
        onClick={() => handleClick(i)}
        disabled={board[i] || winner || gameOver}
      >
        {board[i]}
      </button>
    );
  };

  const getWinningSquares = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return [];
  };

  let status;
  if (winner) {
    status = `🎉 Winner: Player ${winner}!`;
  } else if (isDraw) {
    status = `🤝 It's a Draw!`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-cyan-400/30">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tic Tac Toe
          </h1>
          <div className="text-xl text-gray-300 font-semibold">
            {status}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-8 justify-center">
          {Array(9).fill(null).map((_, i) => renderSquare(i))}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-red-900/30 p-3 rounded-lg border border-red-400/30">
              <div className="text-red-400 text-xl font-bold">{scores.X}</div>
              <div className="text-gray-400 text-sm">Player X</div>
            </div>
            <div className="bg-gray-700/30 p-3 rounded-lg border border-gray-400/30">
              <div className="text-gray-400 text-xl font-bold">{scores.draws}</div>
              <div className="text-gray-400 text-sm">Draws</div>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-400/30">
              <div className="text-blue-400 text-xl font-bold">{scores.O}</div>
              <div className="text-gray-400 text-sm">Player O</div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg 
                transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
            >
              New Game
            </button>
            <button
              onClick={resetScores}
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg 
                transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-400/30"
            >
              Reset Scores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;