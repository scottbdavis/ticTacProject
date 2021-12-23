// import superset from "./superset.js";
// notice properties takeTurn and id are being passed in
const Square = ({ takeTurn, id, player, newState }) => {
	const [color, setColor] = React.useState("green");
	console.log("Square re-rendering now.");
	const [status, setStatus] = React.useState(null);
	const XorO = ["O", "X"];
	const palet = ["blue", "red", "green"];
	// id is the square's number
	// We call takeTurn to tell Parent we have clicked in this square

	// function that takes the player as a parameter and then uses it in the calculation to
	// setColor but does NOT update the player held in the state of the Board component
	const innerTakeTurn = (id) => {
		return (player + 1) % 2;
	};

	return (
		<button
			id={id}
			onClick={(e) => {
				setColor(takeTurn(id));
				newState({ id: id, color: color });
				e.preventDefault();

				let nextplayer = newState({ id });
				setStatus(nextplayer);
				e.target.style.background = color;
			}}
		>
			<h1>{XorO[status]}</h1>
		</button>
	);
};

const Board = () => {
	// 1st player is 1
	// State keeps track of next player
	const [player, setPlayer] = React.useState(1);
	const [state, setState] = React.useState(Array(9).fill(null));
	console.log("Board re-rendering now.");

	// check for winner (see superset.js)
	let status = `Player ${player}`;
	console.log(`Status Player ${status}`);
	// let winner = checkForWinner(state);
	// if (winner != null) status = `Player ${winner} wins`;

	const newState = (idOfSquare) => {
		let thePlayer = player;
		state[idOfSquare] = player; //player is present player
		setState(state); // state is array of 0 or 1 or null
		let nextplayer = (player + 1) % 2;
		setPlayer(nextplayer);
		return thePlayer; //we need to return the present player
	};

	// Note that Child (Square Component) calls this function
	// However the function has access to the player held here
	const takeTurn = (id) => {
		setPlayer((player + 1) % 2); // get next player
		return player;
	};
	function renderSquare(i, color) {
		// use properties to pass callback function takeTurn to Child
		return (
			<Square
				takeTurn={takeTurn}
				id={i}
				newState={newState}
				player={player}
			></Square>
		);
	}
	return (
		<div className="game-board">
			<div className="grid-row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="grid-row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="grid-row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			<div id="info">
				<h1>{status}</h1>
				<button onClick={() => takeTurn()}> Change Player</button>
			</div>
		</div>
	);
};

const Game = () => {
	return (
		<div className="game">
			<Board></Board>
		</div>
	);
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
