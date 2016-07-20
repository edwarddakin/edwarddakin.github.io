window.onload = function() {
	function doSomething(){		 
		var lbl = document.getElementById('messageLabel');
		lbl.innerHTML = 'yoyo';
	}
	for (var i = 0; i < 2000; i++) {
		var words = ["<a href='https://www.instagram.com/explore/tags/dig/'>work</a>", "lust", "give"];
		var getRandomWord = function () {
		    return words[Math.floor(Math.random() * words.length)];
		};
		var word = getRandomWord();		
		document.getElementById("box").innerHTML += ' ' + word;
	};
}