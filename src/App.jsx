
import { useState } from 'react';
import './App.css';

function calculateWinner(square){
  const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],


    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],

  ];

  for(let i=0; i < winningCombination.length; i++){
      const [a,b,c] = winningCombination[i];
      if(square[a] && square[a] == square[b] && square[a] == square[c]){
        return square[a];
      }
  };
  return null;

}


function Square({value,onSquareClick}){
  // console.log('Square component rendered');
  return <button onClick={onSquareClick} className='square'>{value}</button>
}

// history of moves

// squares



function Board(){

  // console.log('Board component rendered');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xisNext,setisNext] = useState(true);

  console.log('squares',squares);

  function handleClick(i){
    // alert(i)
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const updatedSquares = squares.slice();
    if(xisNext){
      updatedSquares[i] = 'X';
    }
    else{
      updatedSquares[i] = 'O';
    }
    setisNext(!xisNext);

    setSquares(updatedSquares);


  };

  const winner = calculateWinner(squares);
  console.log('winner to ',winner);
  let status;
  if(winner){
    status =`winner is : ${winner}`;
  }
  else{
    status = `Next player is : ${xisNext? 'X': 'O'}`
  }


  return(
    <div>
      <div className='status'>{status}</div>
      <button onClick={()=>{
        setSquares(Array(9).fill(null));
        setisNext(true);
      }} style={{
        margin:'10px 0',
      }}>Reset</button>


      <div className='board_row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board_row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board_row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

function App() {
  // console.log('App component rendered');

  return (
    
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'

    }}>

      <h1>Tic-Tac-Toe</h1>

      <Board/>
    </div>
  )
}

export default App
