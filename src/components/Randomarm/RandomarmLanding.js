import React from 'react';
import Background from './Media/marmaduke2.jpg';
import Comic from'./Comic.js';
import { useEffect } from 'react';


export default function RandomarmLanding() {

	let is_real = ''
	let caption = ''
	let points = 0
    async function getComics() {
		const response = await fetch('http://127.0.0.1:5000/comics')
		const data = await response.json()
		caption = data['caption']
		is_real = data['is_real']
	}

	function GuessYes() {
		if (is_real == true) {
			points++
		}
	}

	function GuessNo() {
		if (is_real == false) {
			points++
		}
	}

	useEffect(() => {
		getComics()
	},[])

	return(
		<div style={{backgroundImage: `url(${Background})`}}>
			<Comic caption={caption}/>
			<button onClick={GuessYes}>Yes</button>
			<button onClick={GuessNo}>No</button>
			<button onClick={getComics}>get comics</button>
		</div>
	)
}