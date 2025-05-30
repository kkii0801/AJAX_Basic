# AJAX_Basic
사용된 도구 : React, JavaScript, Router <br />
:point_right: [AJAX_Basic](https://ajax-basic.vercel.app/)

***
## AJAX의 의의
서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고 받을 수 있게 도와주는 간단한 브라우저 기능을 AJAX라고 합니다. <br />
AJAX 기술이 사용되면 새로고침 없이도 쇼핑몰 상품을 더 가져올 수도 있고, 새로고침 없이도 댓글을 서버로 전송할 수도 있는 기능입니다.
***

### 작동 예시
<div align="center"><img src="https://github.com/kkii0801/Readme_files/blob/main/AJA_BS/AJAX_basic.PNG?raw=true"></div>

## 주요 컴포넌트 설명

1. App.js
2. Fetch.js

***

## App.js

### 코드 설명
```
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
```
containerStyle: div 요소에 적용할 스타일입니다. 여기서는 패딩을 20px로 설정합니다. <br />
h1Style: h1 요소에 적용할 스타일입니다. 글자 크기를 24px로 설정하고, 두께를 "normal"로 설정합니다. <br />
div 요소는 className으로 "container"를 가지고, 위에서 정의한 containerStyle을 적용합니다. <br />
h1 요소는 "React Example"이라는 텍스트를 표시하며, h1Style이 적용됩니다. <br />
Fetch /: Fetch 컴포넌트를 포함하여 데이터를 가져오거나 다른 기능을 수행합니다.
***

## Fetch.js

### 코드 설명
```
import { useState, useEffect } from "react";
```
React의 useState와 useEffect 훅을 가져옵니다. useState는 상태 관리를, useEffect는 사이드 이펙트를 처리하는 데 사용됩니다.
```
function Fetch(){
	console.log("component in");

	let [data, setData]=useState(null);
```
data라는 상태 변수를 null로 초기화합니다. setData는 이 상태를 업데이트하는 함수입니다.
```
	let ulStyle={
		marginTop: 24
	};

	let liStyle={
		padding: 5,
		fontSize: 16
	};
```
ulStyle: ul 요소에 적용할 스타일로, 상단 여백을 24px로 설정합니다. <br />
liStyle: li 요소에 적용할 스타일로, 패딩을 5px, 글자 크기를 16px로 설정합니다.
```
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
```
컴포넌트가 마운트될 때 한 번 실행되는 사이드 이펙트입니다. <br />
fetch를 통해 JSON 파일을 비동기적으로 가져옵니다. 성공적으로 데이터를 가져오면 setData(result)를 호출하여 상태를 업데이트합니다. <br />
오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
```
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
```
data가 null일 경우 "Loading..." 메시지를 표시합니다. <br />
데이터가 로드된 경우, ul 요소 안에 data 배열을 순회하여 각 항목을 li 요소로 렌더링합니다. <br />
각 항목은 key 속성이 필요하며, 배열의 인덱스를 사용하여 고유하게 만듭니다.

### 요약
JSON 데이터를 비동기적으로 가져와서 로딩 상태를 관리하고, 데이터를 리스트로 표시하는 React 컴포넌트를 구현합니다. <br />
로딩 중에는 "Loading..." 메시지를 표시하고, 데이터가 준비되면 각 항목을 리스트로 보여줍니다.

