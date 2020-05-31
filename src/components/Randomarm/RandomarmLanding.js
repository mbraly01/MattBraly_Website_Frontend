import React from 'react';
import Comic from'./Comic.js';
import { useState, useEffect } from 'react';
import Warning from './Warning.js';
import Popup from 'reactjs-popup';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import '../styles/Randomarm.css';
import NavBar from '../NavBar.js';
import Scoreboard from './Scoreboard.js';

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
		const response = await fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/comics')
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
		fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/rescue', configs)
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
		fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/report', configs)
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
		fetch('http://flask-env.eba-t39hsrmy.us-east-2.elasticbeanstalk.com/score', configs)
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

	function refreshPage() {
		window.location.reload(false);
	  }

	useEffect(() => {
		getComics()
	},[])

	return(
		<div>
			<div>
			<NavBar/>
			<h1 className='title'>Randomarm</h1>
			<h2 className='intro-big'>A game for Dog-loving Full Stack Developers</h2>
			<h2 className='intro-big'>Guess if the caption matches the comic shown*</h2>
			<h5 className='intro'>*If the caption is misspelled, please fix it, or if it is beyond fixing, please report it.</h5>
			<h5 className="intro">To see your score, scroll down</h5>
			<h5 className="intro">Marmaduke was created by Brad Anderson</h5>

			{/* <h5 className='intro'>You can fix them if you believe you know what they say</h5>
			<h5 className='intro'>OR you can report them if they are beyond saving</h5> */}
			<Comic className='comic' comicLoc={comicLoc} caption={caption}/>

			<Popup trigger={<button className="rmbutton rescue">Fix Comic</button>}
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

			<button className="rmbutton yes" onClick={onYes}>Yes</button>
			<button className="rmbutton no" onClick={onNo}>No</button> 
			<Warning onReport={onReport}/>
			<h2 className="score">{score}</h2>

			<Popup trigger={<button className='rmbutton submit'>Submit Score (Scoreboard Below)</button>}
			modal
			closeOnDocumentClick
			position='center'>
				{close => (
					<div>
						<TextField value={initials}
						id="standard-basic" label="Initials"
						onChange={e=> setInitials(e.target.value)}/>
						<button onClick={function(event){close(); submitScore(); refreshPage()}}>Submit</button>
					</div>
				)}
			</Popup>
			{/* <div>
			<a href='/randomarm/scoreboard' 
			className='rmbutton scoreboard'>Scoreboard</a>
			</div> */}
			
		</div>
		<h2></h2>
		<h1 className="title">Scoreboard</h1>
		<Scoreboard/>
		</div>
	)
}