import Fetch from "./Fetch";
import './App.css';

function App(){
	let containerStyle={
		padding: 20
	};

	let h1Style={
		fontSize: 24,
		fontWeight: "normal"
	};

	return(
		<div className="container" style={containerStyle}>
			<h1 style={h1Style}>React Example</h1>
			<Fetch />
		</div>
	);
}

export default App;