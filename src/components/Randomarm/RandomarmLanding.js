import React from 'react';
import Comic from'./Comic.js';
import { useState, useEffect } from 'react';
import Warning from './Warning.js';
import Popup from 'reactjs-popup';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default function RandomarmLanding(props) {

	const [score, setScore] = useState(0)
	const [isReal, setIsReal] = useState(false)
	const [caption, setCaption] = useState('')
	const [comicLoc, setComicLoc] = useState('')
	const [comic, setComic] = useState('')
	const [initials, setInitials] = useState('')
	const [cOrI, setCOrI] = useState('')
	const [outOf, setOutOf] = useState(0)


    async function getComics() {
		const response = await fetch('http://127.0.0.1:5000/comics')
		const data = await response.json()
		setComic(data['comic'])
		setComicLoc(data['comic_loc'])
		setCaption(data['caption'])
		setIsReal(data['is_real'])
	}

	async function Rescue() {

		const configs = {
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'comic': comic,
				'caption': caption
			}),
		}
		fetch('http://127.0.0.1:5000/rescue', configs)
	}

	async function Report() {

		const configs = {
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'comic': comic
			}),
		}
		fetch('http://127.0.0.1:5000/report', configs)
	}

	async function submitScore() {

		const configs = {
			method: 'POST',
			mode: 'cors',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'initials': initials,
				'score': score,
				'out_of': outOf
			}),
		}
		fetch('http://127.0.0.1:5000/score', configs)
	}

	function GuessYes() {
		setOutOf(outOf + 1)
		if (isReal == 'true') {
			setCOrI('Correct!')
			setScore(score + 1)
		}
		else {
			setCOrI('Incorrect!')
		}
	}

	function GuessNo() {
		setOutOf(outOf + 1)
		if (isReal == 'false') {
			setScore(score + 1)
			setCOrI('Correct!')
		}
		else {
			setCOrI('Incorrect!')
		}
	}

	function onYes() {
		GuessYes()
		getComics()
	}

	function onNo() {
		GuessNo()
		getComics()
	}

	function onReport() {
		Report()
		getComics()
	}

	useEffect(() => {
		getComics()
	},[])

	return(
		<div>
			<Comic comicLoc={comicLoc} caption={caption}/>

			<Popup trigger={<button>Rescue Comic</button>}
				modal
				closeOnDocumentClick
				position='right center'>
				{ close => (
					<div>
						<TextField value={caption}
							id="standard-basic" label="caption"
							fullWidth={true}
							multiline={true}
							onChange={e => setCaption(e.target.value)}/>
							<button onClick={function(event){ close(); Rescue()}}>Submit</button>
					</div>
				)}

			</Popup>

			<button onClick={onYes}>Yes</button>
			<button onClick={onNo}>No</button> 
			<Warning onReport={onReport}/>
			<h2>{score}</h2>

			<button >Scoreboard</button>
			<a href='/randomarm/scoreboard' 
			>See scoreboard</a>
			<Popup trigger={<button>Submit Score</button>}
			modal
			closeOnDocumentClick
			position='center'>
				{close => (
					<div>
						<TextField value={initials}
						id="standard-basic" label="Initials"
						onChange={e=> setInitials(e.target.value)}/>
						<button onClick={function(event){close(); submitScore()}}>Submit</button>
					</div>
				)}
			</Popup>
		</div>
	)
}