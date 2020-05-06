import React from 'react';


let match = true;
let correctCounter = 0;
export default function comicMixer() {

	let comics = []
	let caption = ""
	let comicNumber = 0

	async function getComics() {
		const response = await fetch('http://127.0.0.1:5000/comics')
		const data = await response.json()
		comics = data['comics']
	}
	
	
	function makeComics() {
		console.log(comics)
		if (Math.random() >= 0.49){
			match = true;
		}
		else {
			match = false;
		}

		if (match){
			comicNumber = parseInt(comics[0][0])
			caption = comics[0][1]
			document.getElementById("comic").innerHTML = <img src="'./Comics/' + comicNumber + '.jpg"/>;
			// $('#comic').attr('src', './Comics/' + comicNumber + '.jpg');
			document.getElementById("caption").innerHTML = <p>{caption}</p>;

		}
		else {
			comicNumber = parseInt(comics[0][0])
			caption = comics[1][1]
			document.getElementById("comic").innerHTML = <img src="'./Comics/' + comicNumber + '.jpg"/>;

			// $('#comic').attr('src', './Comics/' + comicNumber + '.jpg');
			document.getElementById("caption").innerHTML = <p>{caption}</p>;
		}
	};
	getComics()
	// makeComics()
}

// $(document).ready(function() {
comicMixer();
// 	$('#topper').mouseover(function() {
// 		$('#explainer').css('display', 'block');
// 	});
// 	$('#topper').mouseout(function() {
// 		$('#explainer').css('display', 'none');
// 	});
// 	$('#yes').click(function() {
// 		if (match){
// 			correctCounter ++;
// 			$('#counter').text(correctCounter + " Correct");
// 			$('#posYes').css('visibility', 'visible');
// 			setTimeout(function() {
//             $('#posYes').css('visibility', 'hidden');},250);
// 			comicMixer();
// 			}
// 		else {
// 			comicMixer();
// 			$('#negNo').css('visibility', 'visible');
// 			setTimeout(function() {
//             $('#negNo').css('visibility', 'hidden');},250);
// 		}
// 	});
// 	$('#no').click(function() {
// 		if (match){
// 			comicMixer();
// 			$('#negYes').css('visibility', 'visible');
// 			setTimeout(function() {
//             $('#negYes').css('visibility', 'hidden');},250);
// 		}
// 		else {
// 			correctCounter ++;
// 			$('#counter').text(correctCounter + " Correct");
// 			comicMixer();
// 			$('#posNo').css('visibility', 'visible');
// 			setTimeout(function() {
//             $('#posNo').css('visibility', 'hidden');},250);
// 		}
// 	});
// });

//Comics that are out: 1997/ 6, 16, 83, 104, 190, 254, 305
//remeber to only have 300 comics per folder