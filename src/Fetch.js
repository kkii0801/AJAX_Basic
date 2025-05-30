import { useState, useEffect } from "react";

function Fetch(){
	console.log("component in");

	let [data, setData]=useState(null);

	let ulStyle={
		marginTop: 24
	};

	let liStyle={
		padding: 5,
		fontSize: 16
	};

	useEffect(() => {
		// console.log("use effect");

		fetch(process.env.PUBLIC_URL+"/data/basic_data.json")
			.then(response => response.json())
			.then(
				result => {
					console.log(result);
					setData(result);
				},
				error => {
					console.log(error);
				}
		)
	},[]);

	if(data === null){
		return(
		<p>Loading...</p>
	);
	}
	else{
		return(
			<ul style={ulStyle}>
			{
			data.map((d, i) => <li key={i+1} style={liStyle}>{d.name} : {d.price}</li>)
			}
			</ul>
		);
	}
}

export default Fetch;