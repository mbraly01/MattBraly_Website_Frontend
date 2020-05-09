import React from 'react';
import Background from './Media/marmaduke2.jpg';
import Comic from'./Comic.js';
import { useState, useEffect } from 'react';


export default function RandomarmLanding() {

	const [score, setScore] = useState(0)
	const [isReal, setIsReal] = useState(false)
	const [caption, setCaption] = useState('')
    async function getComics() {
		const response = await fetch('http://127.0.0.1:5000/comics')
		const data = await response.json()
		setCaption(data['caption'])
		setIsReal(data['is_real'])
	}

	function GuessYes() {
		if (isReal == true) {
			setScore(score + 1)
		}
	}

	function GuessNo() {
		if (isReal == false) {
			setScore(score + 1)
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
			<h2>{score}</h2>
		</div>
	)
}