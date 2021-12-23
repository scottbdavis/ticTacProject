const Square = ({ id, player }) => {
	const [color, setColor] = React.useState("green");
	const pallette = ["red", "blue", "green"];
	const getRandomColor = () => pallette[Math.floor(Math.random() * 3)];
	React.useEffect(() => {
		console.log(`Render ${id}`);
		return () => console.log(`unmounting Square ${id}`);
	});
	return (
		<button
			onClick={(e) => {
				setColor(getRandomColor());
				e.target.style.background = color;
			}}
			// 	onClick={() => {
			// 		alert(`I'm Square ${id}`);
			// 	}}
		>
			<h1>{id}</h1>
		</button>
	);
};

const Board = () => {
	const [player, setPlayer] = React.useState(0);
	const [mounted, setMounted] = React.useState(true);
	const [random, setRandom] = React.useState(0);
	let status = `Player ${player}`;
	const toggle = () => {
		setMounted(!mounted);
	};
	const reRender = () => setRandom(Math.random());

	function renderSquare(i) {
		return <Square id={i}></Square>;
	}

	return (
		<div className="game-board">
			<div className="grid-row">
				{mounted && renderSquare(0)}
				{mounted && renderSquare(1)}
				{mounted && renderSquare(2)}
			</div>

			<div id="info">
				<button onClick={toggle}>Show/Hide Row</button>
				<button onClick={reRender}>Re-render</button>
				<h1>{status}</h1>
			</div>
		</div>
	);
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
