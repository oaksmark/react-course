const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  //   A função abaixo foi substituida por outra localizada no component App.jsx
  //   Este é um exemplo de "deriving state", o qual recebe via pros (no caso "turns")
  //   os valores de indices ogranizados do update realizado simultaneamente nos components
  //   Log.jsx e GameBoard.jsx.

  // const[gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) =>{
  //         const updatedBorad = [...prevGameBoard.map(innerArray => [...innerArray])];
  //         updatedBorad[rowIndex] [colIndex] = activePlayerSymbol;
  //         return updatedBorad;
  //     });

  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
