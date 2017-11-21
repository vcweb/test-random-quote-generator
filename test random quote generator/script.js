'use strict';


function quote() {
	var quoteData = ["Everybody is special. Everybody. Everybody is a hero, a lover, a fool, a villain. Everybody. Everybody has their story to tell.", "If a man does his best, what else is there?", "Success is most often achieved by those who don't know that failure is inevitable."];
	var authorData = ["Alan Moore, V for Vendetta", "Gen. George S. Patton", "Coco Chanel"];

	var quoteNumber = randomInteger(quoteData.length, currentNumber)

	var quoteBody = quoteData[quoteNumber]
	var quoteAuthor = authorData[quoteNumber]

	currentNumber = quoteNumber;

	document.getElementById("quoteDesign").innerHTML = quoteBody
	document.getElementById("authorDesign").innerHTML = quoteAuthor

	//using encodeURIComponent to make sure special chars in the text does't get cut
	var quoteBodyURI = encodeURIComponent(quoteBody)
	var quoteAuthorURI = encodeURIComponent(quoteAuthor)

	/* document.getElementById("btnTweet").href = 'https://twitter.com/intent/tweet?text=' + quoteBodyURI + ' - ' + quoteAuthorURI  */
	$('.btnTweet').on("click", function () {
		var url = 'https://twitter.com/intent/tweet?text=' + quoteBodyURI + ' - ' + quoteAuthorURI;
		window.open(url, 'twitter');
		return false;
	});
}

//random integer generator
function randomInteger(totalQuotes, prevNumber) {
	var number = Math.floor(Math.random() * totalQuotes)
	if (prevNumber === null) {
		return number;
	}
	while (number === prevNumber) {
		number = Math.floor(Math.random() * totalQuotes)
	}
	return number;
}

var currentNumber = null;

window.onload = quote;

$('.inspire').on("click", function () {
	quote();
});

